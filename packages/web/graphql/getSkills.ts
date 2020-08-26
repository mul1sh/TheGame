/*
import gql from 'fake-tag';
import { GetSkillsQuery } from './autogen/types';
import { client } from './client';

const skillsQuery = gql`
  query GetSkills {
    Skill(
      order_by: { Player_Skills_aggregate: { count: desc }, category: asc }
    ) {
      id
      name
      category
    }
  }
`;

*/

export const getSkills = async () => {
  /* 
  const { data, error } = await client.query<GetSkillsQuery>(skillsQuery).toPromise();

  if (!data) {
    if (error) {
      throw error;
    }

    return [];
  }


  return data.Skill;

  */

  return [
    { id: '0x00', name: 'Architecture', category: 'CREATIVE' },
    { id: '0x01', name: 'Fashion Design', category: 'CREATIVE' },
    { id: '0x02', name: 'Graphics Design', category: 'CREATIVE' },
    { id: '0x03', name: 'Art / Illustration', category: 'CREATIVE' },
    { id: '0x04', name: 'Audiovisual', category: 'CREATIVE' },
    { id: '0x05', name: 'Industrial Design', category: 'CREATIVE' },
    { id: '0x06', name: 'Motion Graphics', category: 'CREATIVE' },
    { id: '0x07', name: 'Photography', category: 'CREATIVE' },
    { id: '0x08', name: 'Video Production', category: 'CREATIVE' },
    { id: '0x09', name: 'Accounting', category: 'BUSINESS' },
    { id: '0x10', name: 'Branding', category: 'BUSINESS' },
    { id: '0x11', name: 'Business Development', category: 'BUSINESS' },
    { id: '0x12', name: 'Strategy / Consulting', category: 'BUSINESS' },
    { id: '0x13', name: 'Communications', category: 'BUSINESS' },
    { id: '0x14', name: 'Customer Service', category: 'BUSINESS' },
    { id: '0x15', name: 'Finance', category: 'BUSINESS' },
    { id: '0x16', name: 'Human Resources', category: 'BUSINESS' },
    { id: '0x17', name: 'Learning & Education', category: 'BUSINESS' },
    { id: '0x18', name: 'Legal', category: 'BUSINESS' },
    { id: '0x19', name: 'Marketing / Sales', category: 'BUSINESS' },
    { id: '0x20', name: 'Operations', category: 'BUSINESS' },
    { id: '0x21', name: 'Partnerships', category: 'BUSINESS' },
    { id: '0x22', name: 'Recruiting', category: 'BUSINESS' },
    { id: '0x23', name: 'Moderation', category: 'COMMUNITY' },
    { id: '0x24', name: 'Community Cultivation', category: 'COMMUNITY' },
    { id: '0x25', name: 'Ops / Coordination', category: 'COMMUNITY' },
    { id: '0x26', name: 'Content Creation', category: 'COMMUNITY' },
    { id: '0x27', name: 'Social Media', category: 'COMMUNITY' },
    { id: '0x28', name: 'Memes', category: 'COMMUNITY' },
    { id: '0x29', name: 'Backend Development', category: 'ENGINEERING' },
    { id: '0x30', name: 'DevOps', category: 'ENGINEERING' },
    { id: '0x31', name: 'Frontend Development', category: 'ENGINEERING' },
    { id: '0x32', name: 'Mobile Development', category: 'ENGINEERING' },
    { id: '0x33', name: 'Software Engineering', category: 'ENGINEERING' },
    { id: '0x34', name: 'Smart Contracts', category: 'ENGINEERING' },
    { id: '0x35', name: 'Security / Auditing', category: 'ENGINEERING' },
    { id: '0x36', name: 'Game Development', category: 'ENGINEERING' },
    { id: '0x37', name: 'Data Analytics', category: 'PRODUCT' },
    { id: '0x38', name: 'Product Design', category: 'PRODUCT' },
    { id: '0x39', name: 'Token Engineering', category: 'PRODUCT' },
    { id: '0x40', name: 'Governance Design', category: 'PRODUCT' },
    { id: '0x41', name: 'Project Management', category: 'PRODUCT' },
    { id: '0x42', name: 'Research & Development', category: 'PRODUCT' },
    { id: '0x43', name: 'UI / UX Design', category: 'PRODUCT' },
    { id: '0x44', name: 'Computer Science', category: 'SCIENCE' },
    { id: '0x45', name: 'Cryptography', category: 'SCIENCE' },
    { id: '0x46', name: 'Data Science', category: 'SCIENCE' },
    { id: '0x47', name: 'Economics', category: 'SCIENCE' },
    { id: '0x48', name: 'Mathematics', category: 'SCIENCE' },
    { id: '0x49', name: 'Statistics', category: 'SCIENCE' },
    { id: '0x50', name: 'Machine Learning / AI', category: 'SCIENCE' },
    { id: '0x51', name: 'Node.js', category: 'TECHNOLOGIES' },
    { id: '0x52', name: 'React', category: 'TECHNOLOGIES' },
    { id: '0x53', name: 'React Native', category: 'TECHNOLOGIES' },
    { id: '0x54', name: 'GraphQL', category: 'TECHNOLOGIES' },
    { id: '0x55', name: 'MongoDB', category: 'TECHNOLOGIES' },
    { id: '0x56', name: 'PostgreSQL', category: 'TECHNOLOGIES' },
    { id: '0x57', name: 'MySQL', category: 'TECHNOLOGIES' },
    { id: '0x58', name: 'Elasticsearch', category: 'TECHNOLOGIES' },
    { id: '0x59', name: 'Redis', category: 'TECHNOLOGIES' },
    { id: '0x60', name: 'Firebase', category: 'TECHNOLOGIES' },
    { id: '0x61', name: 'Docker', category: 'TECHNOLOGIES' },
    { id: '0x62', name: 'Kubernetes', category: 'TECHNOLOGIES' },
    { id: '0x63', name: 'Serverless', category: 'TECHNOLOGIES' },
    { id: '0x64', name: 'Javascript', category: 'TECHNOLOGIES' },
    { id: '0x65', name: 'TypeScript', category: 'TECHNOLOGIES' },
    { id: '0x66', name: 'Solidity', category: 'TECHNOLOGIES' },
    { id: '0x67', name: 'Vyper', category: 'TECHNOLOGIES' },
    { id: '0x68', name: 'C', category: 'TECHNOLOGIES' },
    { id: '0x69', name: 'C#', category: 'TECHNOLOGIES' },
    { id: '0x70', name: 'C++', category: 'TECHNOLOGIES' },
    { id: '0x71', name: 'CSS', category: 'TECHNOLOGIES' },
    { id: '0x72', name: 'Go', category: 'TECHNOLOGIES' },
    { id: '0x73', name: 'HTML', category: 'TECHNOLOGIES' },
    { id: '0x74', name: 'Java', category: 'TECHNOLOGIES' },
    { id: '0x75', name: 'Objective-C', category: 'TECHNOLOGIES' },
    { id: '0x76', name: 'Perl', category: 'TECHNOLOGIES' },
    { id: '0x77', name: 'PHP', category: 'TECHNOLOGIES' },
    { id: '0x78', name: 'Dart', category: 'TECHNOLOGIES' },
    { id: '0x79', name: 'Swift', category: 'TECHNOLOGIES' },
    { id: '0x80', name: 'Haskell', category: 'TECHNOLOGIES' },
    { id: '0x81', name: 'Scala', category: 'TECHNOLOGIES' },
    { id: '0x82', name: 'Kotlin', category: 'TECHNOLOGIES' },
    { id: '0x83', name: 'Python', category: 'TECHNOLOGIES' },
    { id: '0x84', name: 'Ruby', category: 'TECHNOLOGIES' },
    { id: '0x85', name: 'Flutter', category: 'TECHNOLOGIES' },
    { id: '0x86', name: 'NextJS', category: 'TECHNOLOGIES' },
    { id: '0x87', name: 'Gatsby', category: 'TECHNOLOGIES' },
    { id: '0x88', name: 'Vue', category: 'TECHNOLOGIES' },
    { id: '0x89', name: 'Angular', category: 'TECHNOLOGIES' },
    { id: '0x90', name: 'Django', category: 'TECHNOLOGIES' },
    { id: '0x91', name: 'Svelte', category: 'TECHNOLOGIES' },
    { id: '0x92', name: 'Cordova', category: 'TECHNOLOGIES' },
    { id: '0x93', name: 'Unity 3D', category: 'TECHNOLOGIES' },
    { id: '0x94', name: 'Blender', category: 'TECHNOLOGIES' },
    { id: '0x95', name: 'Adobe CC', category: 'TECHNOLOGIES' },
  ];
};

export const getCategories = async () => {
  return [
    'CREATIVE',
    'BUSINESS',
    'COMMUNITY',
    'ENGINEERING',
    'PRODUCT',
    'SCIENCE',
    'TECHNOLOGIES',
  ];
};
