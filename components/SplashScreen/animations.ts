export const splashFade = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1 },
}

export const logoAnim = {
  initial: { y: 10, scale: .9, opacity: 0 },
  animate: { y: 0, scale: 1, opacity: 1 },
  transition: { duration: .5, delay: .2 },
}

export const textAnim = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: .6, ease: 'easeInOut' },
}