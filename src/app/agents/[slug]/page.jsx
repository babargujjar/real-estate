import { MOCK_AGENTS, MOCK_PROPERTIES } from '@/lib/data';
import { slugify } from '@/lib/utils';
import AgentDetailPage from '@/components/AgentDetailPage';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';

function getAgentData(slug) {
    const agent = MOCK_AGENTS.find(a => slugify(a.name) === slug);
    if (!agent) return null;
    const properties = MOCK_PROPERTIES.filter(p => p.agentId === agent.id);
    return { agent, properties };
}

export async function generateStaticParams() {
  return MOCK_AGENTS.map((agent) => ({
    slug: slugify(agent.name),
  }));
}

export async function generateMetadata({ params }) {
   const resolvedParams = await params;
  const data = getAgentData(resolvedParams.slug);
  if (!data) {
    return { title: 'Agent Not Found' };
  }
  return {
    title: `${data.agent.name} | Metro Haven`,
    description: data.agent.bio,
  };
}


export default async function AgentDetails({ params }) {
   const resolvedParams = await params;
  const data = getAgentData(resolvedParams.slug);

  if (!data) {
    notFound();
  }

  const { agent, properties } = data;

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Agents', href: '/agents' },
    { name: agent.name }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <AgentDetailPage agent={agent} properties={properties} />
    </>
  );
}
