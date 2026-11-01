import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

// Set your repository URL here when you have confirmed the exact link.
const fraudGithubUrl = 'https://github.com/Roy16Keane/End-to-End-Fraud-detection-system';

const fraudGallery = [
  { filename: 'fraud-inputs.png', title: 'Transaction input interface', description: 'Features collected through the Streamlit application' },
  { filename: 'fraud-result.png', title: 'Prediction and analyst summary', description: 'Fraud score, risk classification and interpretable analyst guidance' },
  { filename: 'shap-waterfall.png', title: 'TreeSHAP explanation', description: 'Feature contributions for an individual prediction' },
  { filename: 'grafana-dashboard.png', title: 'Monitoring dashboard', description: 'Prometheus metrics visualised in Grafana' },
];

function EvidenceImage({ item }) {
  const [available, setAvailable] = React.useState(true);
  return <figure className="overflow-hidden rounded-2xl border border-line bg-white">
    {available ? <img src={`/images/${item.filename}`} alt={item.title} loading="lazy" className="w-full h-auto" onError={() => setAvailable(false)} /> :
      <div className="min-h-48 bg-stone-50 flex flex-col items-center justify-center p-8 text-center text-muted">
        <span className="text-sm font-medium">Screenshot to add</span>
        <code className="text-xs mt-2 break-all">public/images/{item.filename}</code>
      </div>}
    <figcaption className="p-5"><strong className="text-ink">{item.title}</strong><p className="text-muted text-sm mt-1">{item.description}</p></figcaption>
  </figure>;
}

const fraudSections = [
  { title: 'The problem', paragraphs: [
    'Fraud detection requires distinguishing a small number of suspicious transactions from a much larger volume of legitimate activity. Transaction datasets also contain missing values, high-cardinality categorical features, and patterns that can change over time.',
    'I built a system that goes beyond a classifier: it scores transactions, exposes risk information through an API, explains individual predictions, and provides operational monitoring.'
  ]},
  { title: 'Machine learning approach', bullets: [
    'Prepared the IEEE-CIS transaction data, including missing-value handling and removal of leakage-prone features.',
    'Engineered categorical frequency encodings and transaction-amount aggregations grouped by card and address identifiers.',
    'Trained an XGBoost binary classifier with histogram-based tree construction.',
    'Used forward time-based validation rather than random splitting to evaluate on later historical periods. Avoided synthetic oversampling; addressed imbalance through feature design and threshold-based risk interpretation.'
  ]},
  { title: 'Validation and results', paragraphs: [
    'Across five forward validation periods, the model achieved a mean ROC-AUC of 0.9466, with standard deviation 0.0109 (minimum 0.9329; maximum 0.9657).',
    'These figures measure discrimination on historical holdout data. They are not a live fraud-capture rate, and ROC-AUC alone does not establish operational precision, recall, false-positive cost, or financial impact.'
  ]},
  { title: 'Application architecture', paragraphs: [
    'A Streamlit user interface sends transaction inputs to a FastAPI prediction endpoint. The API applies the saved feature pipeline, runs the XGBoost model, and returns a fraud probability, classification, and risk level.',
    'For requested explanations, native XGBoost TreeSHAP contributions provide feature-level context. Docker Compose runs the API, UI, Prometheus, and Grafana on AWS EC2, with Nginx serving as an HTTPS reverse proxy.'
  ]},
  { title: 'MLOps and observability', bullets: [
    'GitHub Actions automates testing and Docker image build/push workflows.',
    'DVC with Amazon S3 supports data and artifact versioning; MLflow tracks model experiments.',
    'Prometheus collects prediction counts, request durations, and API errors; Grafana visualises operational metrics.',
    'Monitoring currently focuses on service and prediction-distribution metrics, not confirmed real-world model drift or fraud outcomes.'
  ]},
  { title: 'Engineering takeaways', paragraphs: [
    'The central design choice was to treat the model as one component of a usable system. Temporal validation made evaluation more realistic; explainability helped make individual scores inspectable; and monitoring made application behaviour visible after deployment.',
    'A logical next step is to connect predictions to verified fraud outcomes, evaluate precision-recall and cost-sensitive thresholds, and monitor model quality and drift over time.'
  ]}
];

const ragSections = [
  { title: 'The problem', paragraphs: [
    'Financial and regulatory documents are lengthy, terminology-heavy and difficult to navigate. Users need answers supported by inspectable source passages—not just fluent model-generated text.',
    'I developed a document intelligence system that processes PDFs, makes their contents searchable through complementary retrieval methods, and generates answers with citations and visible supporting evidence.'
  ]},
  { title: 'Document intelligence and ingestion', bullets: [
    'Implemented PDF upload, document processing and indexing through a FastAPI backend and Streamlit frontend.',
    'Extended the ingestion workflow with layout-aware extraction, document metadata, section information and entity extraction.',
    'Chunked document text with overlapping context; generated semantic embeddings with OpenAI and indexed them in Qdrant.',
    'Stored chunks in an OpenSearch BM25 index for exact terminology matching alongside semantic retrieval.'
  ]},
  { title: 'Hybrid retrieval and grounded generation', paragraphs: [
    'Queries search both Qdrant vector embeddings and the OpenSearch BM25 index. Retrieval signals are combined to select relevant evidence for answer generation.',
    'An OpenAI GPT model generates answers using retrieved evidence. The interface exposes page-linked citations, supporting chunks, extracted entities and retrieval scores, so readers can inspect why an answer was generated.'
  ]},
  { title: 'Architecture and deployment', paragraphs: [
    'The Streamlit interface connects to a FastAPI service that coordinates ingestion, indexing, retrieval and answer generation. Qdrant and OpenSearch provide distinct semantic and keyword search backends.',
    'The stack is containerised with Docker. Cloud deployment uses images stored in Amazon ECR and Kubernetes workloads on AWS EKS, with internal services and a LoadBalancer for the UI.'
  ]},
  { title: 'Key engineering decisions', bullets: [
    'Combined lexical and semantic retrieval because precise regulatory terms and conceptual questions require complementary matching methods.',
    'Designed an evidence inspection interface that surfaces retrieved passages and extracted metadata instead of hiding retrieval behind a chatbot response.',
    'Introduced document-intelligence processing to enrich raw text chunks with layout, entities and provenance information.',
    'Separated the UI, API, search services and model generation to support modular development and cloud deployment.'
  ]},
  { title: 'Limitations and next steps', paragraphs: [
    'This is an engineering demonstration, not a verified source of legal advice. Citations and retrieval scores do not by themselves prove answer correctness or calibrated confidence. No formal retrieval-quality or hallucination benchmark is claimed.',
    'Potential improvements include labelled retrieval evaluations, citation-faithfulness tests, authentication, infrastructure monitoring, CI/CD and more systematic ranking experiments.'
  ]}
];

const ragGallery = [
  { filename: 'rag-interface.png', title: 'Regulatory Copilot interface', description: 'PDF upload, natural-language question answering and page-linked citations' },
  { filename: 'rag-evidence.png', title: 'Supporting chunks and extracted entities', description: 'Inspectable retrieved passages, document metadata, entity fields and retrieval scores' },
  { filename: 'rag-architecture.png', title: 'Hybrid retrieval architecture', description: 'Streamlit, FastAPI, Qdrant, OpenSearch, retrieval and grounded generation' },
  { filename: 'rag-document-intelligence.png', title: 'Document intelligence workflow', description: 'Metadata and entity extraction, indexing, retrieval and answer generation' },
];

const ragGithubUrl = 'https://github.com/Roy16Keane/RAG-regulatory-copilot';

export default function Project() {
  const { slug } = useParams();
  const p = projects.find(x => x.slug === slug);
  if (!p) return <main className="mx-auto max-w-5xl px-6 py-20">Project not found. <Link to="/">Return home</Link></main>;
  const isFraud = slug === 'fraud-detection';
  const isRag = slug === 'regulatory-rag';
  return <main className="mx-auto max-w-5xl px-6 py-16">
    <Link to="/" className="text-sm text-accent">← Back to portfolio</Link>
    <p className="text-xs tracking-widest text-muted mt-14">PROJECT {p.number} / {p.eyebrow}</p>
    <h1 className="font-display text-5xl md:text-6xl mt-5">{p.title}</h1>
    <p className="text-xl text-muted leading-relaxed mt-8 max-w-3xl">{p.summary}</p>
    <div className="my-12 p-8 bg-white rounded-2xl border border-line">
      <p className="text-4xl font-semibold">{p.metric}</p>
      <p className="text-muted mt-2">{p.metricLabel}</p>
    </div>
    {isFraud ? <div className="space-y-14">
      {fraudSections.map(section => <section key={section.title} className="max-w-3xl">
        <h2 className="font-display text-3xl mb-5">{section.title}</h2>
        {section.paragraphs?.map(para => <p key={para} className="text-muted leading-8 mb-4">{para}</p>)}
        {section.bullets && <ul className="space-y-4">{section.bullets.map(b => <li className="border-l-2 border-accent pl-5 text-muted leading-8" key={b}>{b}</li>)}</ul>}
      </section>)}
    </div> : isRag ? <div className="space-y-14">
      {ragSections.map(section => <section key={section.title} className="max-w-3xl">
        <h2 className="font-display text-3xl mb-5">{section.title}</h2>
        {section.paragraphs?.map(para => <p key={para} className="text-muted leading-8 mb-4">{para}</p>)}
        {section.bullets && <ul className="space-y-4">{section.bullets.map(b => <li className="border-l-2 border-accent pl-5 text-muted leading-8" key={b}>{b}</li>)}</ul>}
      </section>)}
    </div> : <><h2 className="font-display text-3xl mb-6">Engineering highlights</h2><ul className="space-y-5 text-muted leading-8">{p.details.map(d => <li className="border-l-2 border-accent pl-5" key={d}>{d}</li>)}</ul></>}
    {isFraud && <section className="mt-16">
      <h2 className="font-display text-3xl mb-3">System in action</h2>
      <p className="text-muted leading-8 mb-7 max-w-3xl">Actual screenshots showing transaction inputs, prediction output, feature contributions, and operational monitoring.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fraudGallery.map(item => <EvidenceImage key={item.filename} item={item} />)}
      </div>
    </section>}
    {isRag && <section className="mt-16">
      <h2 className="font-display text-3xl mb-3">System in action</h2>
      <p className="text-muted leading-8 mb-7 max-w-3xl">Real screenshots and architecture diagrams demonstrating document ingestion, citation-backed answers, evidence inspection and document intelligence.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ragGallery.map(item => <EvidenceImage key={item.filename} item={item} />)}
      </div>
    </section>}
    <div className="flex flex-wrap gap-2 mt-12">{p.tags.map(t => <span className="border border-line rounded-full px-4 py-2 text-sm" key={t}>{t}</span>)}</div>
    <div className="flex flex-wrap gap-3 mt-10">
      {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="inline-block bg-ink text-white rounded-full px-6 py-3 hover:text-white">Open live demo ↗</a>}
      {isRag && ragGithubUrl && <a href={ragGithubUrl} target="_blank" rel="noreferrer" className="inline-block border border-line rounded-full px-6 py-3">View source on GitHub ↗</a>}
      {isFraud && fraudGithubUrl && <a href={fraudGithubUrl} target="_blank" rel="noreferrer" className="inline-block border border-line rounded-full px-6 py-3">View source on GitHub ↗</a>}
      {isFraud && <a href="https://roykeanesyangu.com/api/docs" target="_blank" rel="noreferrer" className="inline-block border border-line rounded-full px-6 py-3">API documentation ↗</a>}
    </div>
  </main>;
}