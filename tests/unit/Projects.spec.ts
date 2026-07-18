import { mount } from '@vue/test-utils'

import ProjectCard from '@/components/ProjectCard.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import { projects } from '@/data/projects'

describe('Projetos', () => {
  it('renderiza links de código e demonstração quando disponíveis', () => {
    const projectWithDemo = projects.find((project) => project.demoUrl)
    expect(projectWithDemo).toBeDefined()

    const wrapper = mount(ProjectCard, { props: { project: projectWithDemo! } })
    const links = wrapper.findAll('a')

    expect(links).toHaveLength(2)
    expect(links[0]?.attributes('href')).toBe(projectWithDemo?.repositoryUrl)
    expect(links[1]?.attributes('href')).toBe(projectWithDemo?.demoUrl)
    links.forEach((link) => {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
      expect(link.text()).toContain('abre em nova aba')
    })
  })

  it('não cria botão de demonstração quando o projeto não possui demo', () => {
    const projectWithoutDemo = projects.find((project) => !project.demoUrl)
    const wrapper = mount(ProjectCard, { props: { project: projectWithoutDemo! } })

    expect(wrapper.findAll('a')).toHaveLength(1)
    expect(wrapper.text()).not.toContain('Ver projeto')
  })

  it('filtra projetos por categoria e tecnologia e permite limpar', async () => {
    const wrapper = mount(ProjectsSection)

    expect(wrapper.findAll('[data-testid="project-card"]')).toHaveLength(projects.length)

    await wrapper.get('[data-testid="category-filter"]').setValue('Infraestrutura')
    expect(wrapper.findAll('[data-testid="project-card"]')).toHaveLength(1)
    expect(wrapper.text()).toContain('Infraestrutura e Serviços em Raspberry Pi')

    await wrapper.get('[data-testid="technology-filter"]').setValue('Java 21')
    expect(wrapper.findAll('[data-testid="project-card"]')).toHaveLength(0)
    expect(wrapper.text()).toContain('Nenhum projeto corresponde')

    await wrapper.get('button').trigger('click')
    expect(wrapper.findAll('[data-testid="project-card"]')).toHaveLength(projects.length)
  })
})
