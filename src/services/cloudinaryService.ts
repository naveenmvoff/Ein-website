/**
 * Cloudinary Image Upload Service
 * Handles image uploads to Cloudinary with signed authentication
 */

interface UploadResponse {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

/**
 * Get signed upload parameters from the backend
 */
async function getUploadSignature(): Promise<{
  signature: string;
  timestamp: number;
}> {
  const response = await fetch("/api/cloudinary-signature");
  if (!response.ok) {
    throw new Error("Failed to get upload signature");
  }
  return response.json();
}

/**
 * Upload a blob/file to Cloudinary
 * @param blob - File blob to upload
 * @returns Secure URL of the uploaded image
 */
export async function uploadImageToCloudinary(blob: Blob): Promise<string> {
  try {
    const { signature, timestamp } = await getUploadSignature();

    const formData = new FormData();
    formData.append("file", blob);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "");
    formData.append("timestamp", timestamp.toString());
    formData.append("signature", signature);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data: UploadResponse = await response.json();
    return data.secure_url;
  } catch (error) {
    throw new Error(
      `Image upload failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

/**
 * Convert file to blob and upload to Cloudinary
 * Useful for file input elements
 * @param file - File from input element
 * @returns Secure URL of the uploaded image
 */
export async function uploadFileToCloudinary(file: File): Promise<string> {
  if (!file) {
    throw new Error("No file provided");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("File must be an image");
  }

  return uploadImageToCloudinary(file);
}

/**
 * Upload image blob with optional compression for thumbnails
 * @param blob - Image blob
 * @param compressOptions - Optional compression settings
 * @returns Promise with secure URL
 */
export async function uploadThumbnailToCloudinary(
  blob: Blob,
  compressOptions?: {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
  }
): Promise<string> {
  const {
    maxWidth = 1200,
    maxHeight = 800,
    quality = 0.85,
  } = compressOptions || {};

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = document.createElement("img");
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Resize if image is too large
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (compressedBlob) => {
              if (compressedBlob) {
                uploadImageToCloudinary(compressedBlob)
                  .then(resolve)
                  .catch(reject);
              } else {
                reject(new Error("Failed to compress image"));
              }
            },
            "image/jpeg",
            quality
          );
        } else {
          reject(new Error("Failed to get canvas context"));
        }
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(blob);
  });
}
