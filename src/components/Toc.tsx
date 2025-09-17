import tocData from '../toc.json';
import { Link } from 'react-router-dom'


export function Toc() {
  return (
    <div>
      <h1>Оглавление</h1>
      <ul>
        {tocData.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.topic}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
 {tocData.subtopics.map(topic => (
          <TopicItem 
            key={topic.path} 
            topic={topic} 
            onSelectNote={onSelectNote}
          />
        ))}
          */



// function TopicItem({ topic, level = 0, onSelectNote }) {
//   const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;
//   const indent = level * 20;

//   return (
//     <div>
//       {/* Основная тема */}
//       <p 
//         style={{ marginLeft: `${indent}px`, cursor: topic.path ? 'pointer' : 'default' }}
//         onClick={() => topic.path && onSelectNote(topic.path)}
//       >
//         {topic.topic} [{topic.path.split('/')[1]}]
//       </p>
      
//       {/* Вложенные темы */}
//       {hasSubtopics && (
//         <div>
//           {topic.subtopics.map(subtopic => (
//             <TopicItem 
//               key={subtopic.path} 
//               topic={subtopic} 
//               level={level + 1} 
//               onSelectNote={onSelectNote}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }