export type Category = 'Product' | 'Marketing' | 'Engineering' | 'Leadership';
export type Project = {
  slug: string; title: string; organization: string; summary: string;
  categories: Category[]; theme: string; visual: 'prompt' | 'toolhouse' | 'airbnb' | 'leadership';
  context: string; contribution: string; tools: string[]; github?: string;
  problem: string; approach: string[]; build: string; learning: string; next: string[];
};

export const projects: Project[] = [
  {
    slug: 'prompt-tuning', title: 'Making AI make sense.', organization: 'Microsoft · Team project',
    summary: 'Exploring what makes a prompt produce a useful, coherent response.',
    categories: ['Product', 'Engineering'], theme: 'lilac', visual: 'prompt',
    context: 'AI prompt evaluation', contribution: 'Prompt experimentation & evaluation', tools: ['LLMs', 'BLEU evaluation'],
    problem: 'A response can contain the right words and still miss the point. In a team project with Microsoft’s Cambridge office, I explored prompt quality, including repetition and gibberish in model outputs.',
    approach: ['Craft and compare optimized prompts with human-written inputs.', 'Use BLEU scores to evaluate response quality.', 'Examine where the evaluation falls short on creativity and coherence.'],
    build: 'I contributed to prompt experiments and evaluation with the team. The original project description documents the comparison approach; a public demo and implementation artifacts are not yet included here.',
    learning: 'A single metric cannot tell the whole story of a useful response. This work raised questions about how to evaluate creativity and coherence alongside lexical similarity.',
    next: ['A concrete task and an anonymized before-and-after prompt pair.', 'My specific contributions within the team and the experiment setup.', 'Results, limitations, and a richer rubric for response quality.'],
  },
  {
    slug: 'toolhouse', title: 'A more personal web.', organization: 'Toolhouse · Internship project',
    summary: 'Using machine learning to explore personalization and healthcare professional engagement.',
    categories: ['Product', 'Marketing', 'Engineering'], theme: 'sage', visual: 'toolhouse',
    context: 'Healthcare website personalization', contribution: 'Modeling & data visualization',
    tools: ['Python', 'Random Forest', 'Seaborn'], github: 'https://github.com/tanisha-jainn/Toolhouse_FP/tree/main',
    problem: 'How might a life sciences website make its content more relevant to healthcare professionals? At Toolhouse, I explored the relationship between personalization strategies and engagement.',
    approach: ['Model different personalization tactics using simulated data.', 'Build a Random Forest classifier to investigate conversion patterns.', 'Visualize the findings with Seaborn to inform website recommendations.'],
    build: 'The project combines simulated data, a classification model, and visual analysis. Its code is linked below. This was an exploration of personalization strategies, rather than evidence of a deployed website’s conversion lift.',
    learning: 'Model performance on simulated data is useful for exploration, but does not establish real-world impact. A stronger next step would be testing specific personalization hypotheses against actual user behavior.',
    next: ['The personalization options considered and why they were chosen.', 'Screenshots of the analysis and a clear explanation of the simulated data.', 'A proposed experiment, success metric, and guardrail for a real website.'],
  },
  {
    slug: 'airbnb-ml', title: 'What makes a stay?', organization: 'Break Through Tech AI · ML project',
    summary: 'Exploring listing features and marketability through the machine learning lifecycle.',
    categories: ['Engineering'], theme: 'peach', visual: 'airbnb',
    context: 'Airbnb listing analysis', contribution: 'Data preparation & modeling', tools: ['Machine learning', 'Data preparation', 'Feature analysis'],
    github: 'https://github.com/tanisha-jainn/airbnb-ml-portfolio',
    problem: 'Which listing features might matter most to prospective guests? This project explored Airbnb data to better understand the relationship between listing characteristics and marketability.',
    approach: ['Prepare listing data for analysis.', 'Explore features that may influence a listing’s appeal.', 'Develop a learning model as part of an end-to-end machine learning workflow.'],
    build: 'I built a learning model to explore listing features as part of my AI coursework. The linked repository is the place to inspect the implementation. The dataset, target definition, and evaluation details still need to be documented in this case study.',
    learning: 'Turning a broad question about appeal into a modeling task requires a precise target. The case study will distinguish what the data measures from what it can actually tell us about guest preferences.',
    next: ['Dataset provenance, target variable, and data-cleaning choices.', 'A baseline, evaluation split, and model comparisons.', 'Feature findings and the limits of interpreting them as user preferences.'],
  },
  {
    slug: 'student-leadership', title: 'A seat at the table.', organization: 'UMass Boston · Student leadership',
    summary: 'Working on equitable funding, student needs, and responsible AI in education.',
    categories: ['Leadership'], theme: 'butter', visual: 'leadership',
    context: 'Student government & ethical AI', contribution: 'Associate Justice & board member', tools: ['Stakeholder collaboration', 'Student advocacy', 'Ethical AI'],
    problem: 'University decisions affect students with different needs and perspectives. Through student government and the Dean of Students’ Ethical AI Board, I helped bring those perspectives into the conversation.',
    approach: ['Collaborate on equitable funding as an Associate Justice in Undergraduate Student Government.', 'Engage faculty on student needs and help organize internal votes.', 'Promote responsible use of tools such as large language models through the Ethical AI Board.'],
    build: 'This work centered on collaboration, governance, and advocacy. My contributions included organizing internal operations and participating in discussions about how AI tools can support student success.',
    learning: 'Product thinking also means understanding who a decision serves. These roles offered a setting to consider different stakeholders and the responsibilities that come with allocating resources or introducing new technology.',
    next: ['One specific decision or initiative and the stakeholders involved.', 'My individual responsibilities and how competing needs were considered.', 'A documented outcome or reflection, without disclosing confidential discussions.'],
  },
];
