import React from 'react';

const sections = [
  {
    title: 'Research tasks',
    tasks: ['Carry out user research', 'Do market & competitor research'],
  },
  {
    title: 'Content tasks',
    tasks: ['Source and optimize your images', 'Create engaging, on-brand copy'],
  },
  {
    title: 'Design tasks',
    tasks: ['Plan your (responsive) layout', 'Use wireframes to test your layout', 'Establish your branding'],
  },
  {
    title: 'Marketing tasks',
    tasks: ['Make sure your tracking codes work', 'Connect integrations and plug-ins'],
  },
  {
    title: 'Technical tasks',
    tasks: ['Register your domain name', 'Find a reliable web hosting service', 'Set up your SSL certificate'],
  },
  {
    title: 'Compliance tasks',
    tasks: ['Include site disclosures', 'Consider data protection laws'],
  },
  {
    title: 'Testing tasks',
    tasks: ['Ensure your website is functioning with user tests'],
  },
];

export default function ProductChecklist() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {sections.map((section) => (
        <div key={section.title} className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <ul className="space-y-2">
            {section.tasks.map((task) => (
              <li key={task} className="flex items-center space-x-2">
                <input type="checkbox" className="accent-sky-500 w-4 h-4" />
                <label className="text-gray-700">{task}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
