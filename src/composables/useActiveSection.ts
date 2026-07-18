import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? '')
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (!('IntersectionObserver' in window)) return

    observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) activeSection.value = visibleEntry.target.id
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.4] },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer?.observe(section)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { activeSection }
}
