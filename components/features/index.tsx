'use client'
import cn from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'
import styles from './style.module.css'
import clsx from 'clsx'
import { ChevronRightIcon } from 'lucide-react'

export function Feature({ large, children, className, href, action, index, style, ...props } : {
  large?: boolean
  children: ReactNode
  className?: string
  href?: string
  action?: () => void
  index: number
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: Math.min(0.25 + index * 0.2, 0.8) }}
      className={cn(
        styles.feature,
        large && styles.large,
        className
      )}
      style={style}
    >
      {children}
      {href && <Link href={href} className={'mt-4 inline-block font-medium text-lg'} style={{ textDecoration: 'none' }}>
        Explore &rarr;
      </Link>}
    </motion.div>
  )
}

export function Features({ children }: { children: ReactNode }) {
  return <div className={styles.features}>{children}</div>
}
