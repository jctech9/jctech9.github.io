import type { Education, Experience, ExternalLink, Language } from '@/types/portfolio'

export const experience: Experience = {
  organization: 'Núcleo de Práticas em Informática — UFC Quixadá',
  role: 'Estagiário em Desenvolvimento de Sistemas Web',
  period: 'Agosto de 2025 — julho de 2026',
  activities: [
    'Desenvolvimento e manutenção de funcionalidades de back-end e front-end em um Sistema de Gestão de Riscos, com Java, Spring Boot, Vue.js, TypeScript e PostgreSQL.',
    'Manipulação de dados JSON e geração de planilhas XLSX com Apache POI, incluindo a construção de componentes visuais e de uma página de relatórios.',
    'Modelagem de entidades, levantamento de requisitos e produção de documentação técnica.',
    'Trabalho em equipe com Git e GitLab, com contato prático com autenticação e controle de acesso via Keycloak.',
  ],
}

export const education: Education[] = [
  {
    institution: 'Universidade Federal do Ceará — UFC',
    course: 'Bacharelado em Sistemas de Informação',
    period: 'Conclusão prevista para junho de 2027',
  },
  {
    institution: 'UNIGRANDE — Centro Universitário da Grande Fortaleza',
    course: 'Curso Técnico em Informática',
    period: 'Janeiro de 2017 — dezembro de 2019',
  },
]

export const languages: Language[] = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado' },
]

export const contactLinks: ExternalLink[] = [
  { label: 'GitHub', href: 'https://github.com/jctech9' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jones-cabral-00954030a' },
]
