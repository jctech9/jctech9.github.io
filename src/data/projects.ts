import type { Project } from '@/types/portfolio'

export const projects: Project[] = [
  {
    name: 'NetPulse Monitor',
    description:
      'Monitor de disponibilidade de serviços com painel público de status atualizado automaticamente.',
    category: 'Monitoramento',
    technologies: [
      'Python',
      'Vue 3',
      'TypeScript',
      'Chart.js',
      'GitHub Actions',
      'GitHub Pages',
      'Telegram Bot API',
    ],
    result:
      'Monitoramento de HTTP, conteúdo, APIs JSON, TCP, DNS e TLS, com histórico de disponibilidade e incidentes e alertas de queda e recuperação.',
    repositoryUrl: 'https://github.com/jctech9/netpulse-monitor',
    demoUrl: 'https://jctech9.github.io/netpulse-monitor/',
  },
  {
    name: 'Automations',
    description:
      'Automações em Python para alertas meteorológicos e monitoramento do feed da UFC Quixadá, com notificações pelo Telegram.',
    category: 'Automação',
    technologies: [
      'Python',
      'GitHub Actions',
      'APIs HTTP',
      'Telegram Bot API',
      'RSS/Atom',
      'Pytest',
    ],
    result:
      'Execuções agendadas com retries, timeouts, cache de estado, testes automatizados e validação TLS.',
    repositoryUrl: 'https://github.com/jctech9/automations',
  },
  {
    name: 'Projeto Exemplo JSON para XLSX',
    description:
      'Aplicação Java com Spring Boot que consulta uma API de origem e transforma dados JSON em planilhas XLSX.',
    category: 'Back-end',
    technologies: [
      'Java 21',
      'Spring Boot',
      'Apache POI',
      'APIs HTTP',
      'Maven',
      'JUnit',
      'GitHub Actions',
    ],
    result:
      'Pipeline de exportação XLSX com testes automatizados, allowlist de destinos HTTP e proteções contra SSRF.',
    repositoryUrl: 'https://github.com/jctech9/Projeto-Exemplo-json-to-xlsx',
  },
  {
    name: 'UFCQ Monitor',
    description:
      'Página pública de monitoramento da disponibilidade dos serviços web da UFC Quixadá.',
    category: 'Monitoramento',
    technologies: [
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'GitHub Actions',
      'GitHub Pages',
      'Pytest',
    ],
    result:
      'Atualização automatizada de disponibilidade HTTP, latência, redirecionamentos, certificado SSL e histórico de incidentes.',
    repositoryUrl: 'https://github.com/jctech9/ufcq-monitor',
    demoUrl: 'https://jctech9.github.io/ufcq-monitor/',
  },
  {
    name: 'Watches',
    description: 'Aplicação web e PWA para gerenciamento de uma coleção de relógios.',
    category: 'Aplicação web',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Firebase Authentication',
      'Firestore',
      'Service Worker',
      'GitHub Pages',
    ],
    result:
      'CRUD autenticado, dashboard responsivo e suporte offline com instalação como aplicativo PWA.',
    repositoryUrl: 'https://github.com/jctech9/Watches',
    demoUrl: 'https://jctech9.github.io/Watches/',
  },
  {
    name: 'Energy Consumption',
    description:
      'Aplicação web para registrar medições e projetar consumo e custo mensal de energia.',
    category: 'Aplicação web',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase', 'Firestore', 'GitHub Pages'],
    result:
      'Projeções mensais em diferentes modos de cálculo, com validação de dados, autenticação e persistência.',
    repositoryUrl: 'https://github.com/jctech9/energy-consumption',
    demoUrl: 'https://jctech9.github.io/energy-consumption/',
  },
  {
    name: 'Infraestrutura e Serviços em Raspberry Pi',
    description:
      'Documentação e scripts relacionados à configuração de serviços de rede e monitoramento em Raspberry Pi.',
    category: 'Infraestrutura',
    technologies: [
      'Linux',
      'Raspberry Pi',
      'Python',
      'OpenWrt',
      'Tailscale',
      'Samba',
      'Uptime Kuma',
    ],
    result:
      'Configuração documentada de VPN, compartilhamento de arquivos, monitoramento e ponto de acesso Wi-Fi.',
    repositoryUrl: 'https://github.com/jctech9/RPI3-B-PLUS',
  },
]

export const projectCategories = [
  'Todos',
  ...Array.from(new Set(projects.map((project) => project.category))),
]

export const featuredTechnologies = [
  'Todas',
  'Java 21',
  'Python',
  'Vue 3',
  'JavaScript',
  'GitHub Actions',
  'Firestore',
  'Linux',
]
