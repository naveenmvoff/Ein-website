"use client"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

interface PhoneNumberAnimationProps {
  phoneNumber: string
  href: string
}

export function PhoneNumberAnimation({ phoneNumber, href }: PhoneNumberAnimationProps) {
  const containerRef = useRef<HTMLAnchorElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const chars = containerRef.current.querySelectorAll("span")
      if (chars.length === 0) return

      const animatePhoneNumber = () => {
        const tl = gsap.timeline()

        // Pop in animation - each character staggered
        tl.fromTo(
          chars,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out",
            stagger: 0.08,
          },
          0,
        )

        // Keep visible for 3 seconds
        tl.to(chars, { duration: 3 })

        // Pop out animation - all at once
        tl.to(
          chars,
          {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            ease: "back.in",
          },
        )

        // Immediately restart the animation
        tl.call(() => {
          animatePhoneNumber()
        })
      }

      animatePhoneNumber()
    },
    { scope: containerRef },
  )

  return (
    <a
  ref={containerRef}
  href={href}
  className="text-xl sm:text-3xl md:text-2xl lg:text-4xl font-extrabold tracking-wide group-hover:scale-105 transition-transform duration-200"
>
  {phoneNumber.split("").map((char, index) => (
    <span key={index}>{char}</span>
  ))}
</a>

  )
}
