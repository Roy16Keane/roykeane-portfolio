import {ArrowUpRight, Github, Linkedin} from 'lucide-react';import {projects} from '../data/projects';import ProjectCard from '../components/ProjectCard';
// Fill in these details when you're ready. Empty entries stay hidden.
const CONTACT = {
  linkedin: 'https://www.linkedin.com/in/roykeane-syangu-b15607231/',
  email: 'keaneroy15444@gmail.com',
  cvPath: '', // Example: '/Roykeane-Syangu-CV.pdf' (place the PDF in public/)
};
const expertise = [
  {title:'Machine Learning & Deep Learning',description:'Building, evaluating and explaining predictive models.',skills:['Python','Scikit-learn','XGBoost','PyTorch','Pandas','NumPy','Feature engineering','Time-aware validation','SHAP']},
  {title:'Generative AI & Retrieval',description:'Developing grounded document question-answering systems.',skills:['RAG pipelines','OpenAI API','Embeddings','Hybrid search','Qdrant','OpenSearch / BM25','Document intelligence','Citation grounding']},
  {title:'Backend & Cloud Engineering',description:'Turning models into accessible, deployable services.',skills:['FastAPI','REST APIs','Streamlit','Docker','Docker Compose','AWS EC2','AWS EKS / ECR / S3','Kubernetes','Nginx']},
  {title:'MLOps & Observability',description:'Supporting reproducible delivery and service monitoring.',skills:['Git / GitHub','GitHub Actions','MLflow','DVC','Prometheus','Grafana','API monitoring','CI/CD']},
];
export default function Home(){return <main><section className="mx-auto max-w-6xl px-6 pt-20 pb-24"><div className="text-xs tracking-[.24em] text-accent font-semibold">MACHINE LEARNING & AI ENGINEER</div><h1 className="font-display text-5xl md:text-7xl leading-[1.14] max-w-4xl mt-7">Building intelligent systems, <em>from data to deployment.</em></h1><p className="text-muted text-lg leading-relaxed max-w-2xl mt-8">I'm Roykeane, an engineer with an MSc in Robotics & AI and a background in aerospace engineering. I develop end-to-end AI solutions spanning machine learning, generative AI, cloud deployment and monitoring.</p><div className="flex flex-wrap gap-5 mt-9 text-sm font-semibold"><a href="#projects" className="bg-ink text-white rounded-full px-6 py-3 hover:text-white hover:bg-accent">Explore my work ↗</a><a href="#about" className="border border-line rounded-full px-6 py-3">More about me</a></div></section><section id="projects" className="border-t border-line py-20"><div className="mx-auto max-w-6xl px-6"><div className="flex justify-between items-end gap-4 mb-9"><div><p className="text-xs tracking-widest text-accent">SELECTED WORK</p><h2 className="font-display text-4xl mt-3">Featured projects</h2></div><span className="text-muted text-sm">01 — 02</span></div><div className="grid md:grid-cols-2 gap-5">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></div></section><section id="research" className="border-t border-line py-20"><div className="mx-auto max-w-6xl px-6"><p className="text-xs tracking-widest text-accent">ACADEMIC RESEARCH / 2024</p><h2 className="font-display text-4xl mt-3">Research & academic work</h2><div className="grid md:grid-cols-[1.15fr_1fr] gap-8 mt-9 items-center"><a href="/research/msc-thesis" className="block border border-line rounded-2xl bg-white p-4"><img src="/images/msc-research-poster.jpeg" alt="MSc research poster on truss uncertainty quantification" className="w-full h-72 object-contain" loading="lazy"/></a><div><p className="text-xs tracking-widest text-accent">MSC DISSERTATION · UNIVERSITY OF GLASGOW</p><h3 className="font-display text-3xl mt-4">Structural analysis under uncertainty</h3><p className="text-muted leading-7 mt-4">Compared Karhunen–Loève expansion with analytical methods, Monte Carlo simulation and a neural network surrogate to investigate accuracy and computational efficiency in structural uncertainty quantification.</p><p className="text-sm mt-4 font-semibold">Project grade: A5 · 60 credits</p><a href="/research/msc-thesis" className="inline-block mt-6 text-accent font-semibold text-sm">Explore the research ↗</a></div></div></div></section><section id="about" className="border-t border-line py-20"><div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_2fr] gap-12"><h2 className="font-display text-4xl">About me</h2><div className="text-muted leading-8 text-lg"><p>I'm a Machine Learning and AI Engineer with an MSc in Robotics and Artificial Intelligence from the University of Glasgow and a background in Aerospace Engineering.</p><p className="mt-5">My focus is bridging the gap between machine learning research and practical applications: developing reliable systems from data preparation and modelling through to deployment, explainability and monitoring.</p></div></div></section><section id="expertise" className="border-t border-line py-20"><div className="mx-auto max-w-6xl px-6"><p className="text-xs tracking-widest text-accent">WHAT I WORK WITH</p><h2 className="font-display text-4xl mt-3">Technical expertise</h2><p className="text-muted max-w-2xl mt-5 leading-7">My strongest experience comes from building and deploying end-to-end machine learning and document intelligence projects. These are the technologies and practices I have applied across that work.</p><div className="grid md:grid-cols-2 gap-5 mt-10">{expertise.map(group=><div key={group.title} className="bg-white border border-line rounded-2xl p-7"><h3 className="text-lg font-semibold">{group.title}</h3><p className="text-muted text-sm mt-2 leading-6">{group.description}</p><div className="flex flex-wrap gap-2 mt-6">{group.skills.map(skill=><span key={skill} className="border border-line rounded-full px-3 py-2 text-xs text-ink">{skill}</span>)}</div></div>)}</div><p className="text-muted text-sm mt-8">Explore the <a href="#projects" className="text-accent underline underline-offset-4">featured projects</a> for architecture, implementation decisions, and evidence of these skills in use.</p></div></section><section id="education" className="border-t border-line py-20">
<div className="mx-auto max-w-6xl px-6">
<p className="text-xs tracking-widest text-accent">ACADEMIC FOUNDATION & PROFESSIONAL DEVELOPMENT</p>
<h2 className="font-display text-4xl mt-3">Education & certifications</h2>
<p className="text-muted max-w-2xl mt-5 leading-7">A foundation in aerospace engineering, advanced study in robotics and artificial intelligence, and professional certifications in data and analytics.</p>
<div className="grid md:grid-cols-2 gap-5 mt-10">
<article className="border border-line bg-white rounded-2xl p-7">
<p className="text-xs tracking-widest text-accent">2023 — 2024 · MASTER'S DEGREE</p>
<h3 className="font-display text-2xl mt-3">MSc Robotics & Artificial Intelligence</h3>
<p className="text-muted mt-2">University of Glasgow · James Watt School of Engineering</p>
<p className="text-sm leading-7 mt-5">Advanced study in machine learning, deep learning, control systems, robotics and real-time embedded programming.</p>
<div className="border-t border-line mt-5 pt-5">
<p className="text-sm font-semibold">Research dissertation · A5 grade</p>
<p className="text-muted text-sm mt-2">Uncertainty quantification of truss structures using Karhunen–Loève expansion, analytical modelling, Monte Carlo simulation and neural networks.</p>
<a href="/research/msc-thesis" className="inline-block text-accent font-semibold text-sm mt-4">Explore MSc research ↗</a>
</div>
</article>
<article className="border border-line bg-white rounded-2xl p-7">
<p className="text-xs tracking-widest text-accent">2019 — 2023 · BACHELOR'S DEGREE</p>
<h3 className="font-display text-2xl mt-3">BEng Aerospace Engineering</h3>
<p className="text-muted mt-2">Nanchang Hangkong University · China</p>
<p className="text-sm leading-7 mt-5">Built a foundation in engineering mathematics, structural analysis, mechanics and analytical problem-solving, which informs my approach to modelling and AI engineering.</p>
</article>
</div>
<h3 className="font-display text-2xl mt-12">Professional certifications</h3>
<div className="grid md:grid-cols-2 gap-5 mt-6">
<article className="border border-line bg-white rounded-2xl p-6">
<p className="text-xs tracking-widest text-accent">COMPTIA · 2024</p>
<h4 className="font-semibold text-lg mt-2">CompTIA Data+</h4>
<p className="text-muted text-sm leading-6 mt-2">Data concepts, data quality, analysis, visualisation and governance.</p>
</article>
<article className="border border-line bg-white rounded-2xl p-6">
<p className="text-xs tracking-widest text-accent">COMPTIA</p>
<h4 className="font-semibold text-lg mt-2">CompTIA DataX / DataAI</h4>
<p className="text-muted text-sm leading-6 mt-2">Advanced data science and AI concepts, including data preparation, statistical modelling and machine learning evaluation.</p>
</article>
</div>
</div></section><section id="contact" className="border-t border-line py-20"><div className="mx-auto max-w-6xl px-6">
<p className="text-xs tracking-widest text-accent">GET IN TOUCH</p>
<h2 className="font-display text-4xl mt-3">Contact & professional links</h2>
<p className="text-muted max-w-2xl mt-5 leading-7">Interested in machine learning, generative AI or applied research? Explore my work or get in touch to discuss opportunities and collaborations.</p>
<div className="grid md:grid-cols-2 gap-5 mt-10">
<a href="https://github.com/Roy16Keane" target="_blank" rel="noopener noreferrer" className="border border-line bg-white rounded-2xl p-7 hover:border-accent transition-colors"><p className="text-xs tracking-widest text-accent">CODE & PROJECTS</p><h3 className="font-display text-2xl mt-3">GitHub ↗</h3><p className="text-muted text-sm mt-3">Explore source code, architecture and technical documentation.</p></a>
<a href="https://github.com/Roy16Keane/End-to-End-Fraud-detection-system" target="_blank" rel="noopener noreferrer" className="border border-line bg-white rounded-2xl p-7 hover:border-accent transition-colors"><p className="text-xs tracking-widest text-accent">FEATURED REPOSITORY</p><h3 className="font-display text-2xl mt-3">Fraud Detection ↗</h3><p className="text-muted text-sm mt-3">Model serving, explainability, CI/CD and monitoring.</p></a>
</div>
<div className="mt-8 border-t border-line pt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
{CONTACT.linkedin && <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold">LinkedIn ↗</a>}
{CONTACT.email && <a href={`mailto:${CONTACT.email}`} className="text-accent font-semibold">Email me ↗</a>}
{CONTACT.cvPath && <a href={CONTACT.cvPath} download className="text-accent font-semibold">Download CV ↓</a>}
</div>
</div></section><footer className="border-t border-line py-12"><div className="mx-auto max-w-6xl px-6 flex flex-wrap justify-between gap-4"><p className="font-display text-2xl">Let's build something meaningful.</p><p className="text-muted text-sm">© {new Date().getFullYear()} Roykeane Syangu</p></div></footer></main>}