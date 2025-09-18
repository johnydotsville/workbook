import { useEffect, useState } from "react"
import { MarkdownBox } from "./MarkdownBox";
import { useLocation } from "react-router-dom";
// import { useParams } from 'react-router-dom';


export function NoteView() {
  const location = useLocation();
  
  // const [note, setNote] = useState<string>('');
  // const [noteLoading, setNoteLoading] = useState<boolean>(false);
  // const [noteLoadingError, setNoteLoadingError] = useState<string | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const url = `/konspekt/${location.pathname}/index.md`;
  //     console.log(url)
  //     setNoteLoading(true);
  //     try {
  //       const note = await fetch(url);
  //       const noteText = await note.text();
  //       setNote(noteText);
  //     } catch(error) {
  //       setNoteLoadingError((error as Error).message)
  //     } finally {
  //       setNoteLoading(false);
  //     }
  //   })();
  // }, [location]);

  // if (noteLoading) return <div>Загрузка конспекта...</div>
  // if (noteLoadingError) return <div>noteLoadingError</div>

  return (
    <div>
      {/* <MarkdownBox content={note} basePath={location.pathname} /> */}
      {location.pathname}
    </div>
  )
}


// export function NoteView() {
//   const location = useLocation();
  
//   const [note, setNote] = useState<string>('');
//   const [noteLoading, setNoteLoading] = useState<boolean>(false);
//   const [noteLoadingError, setNoteLoadingError] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       const url = `${location.pathname}/index.md`;
//       console.log(url)
//       setNoteLoading(true);
//       try {
//         const note = await fetch(url);
//         const noteText = await note.text();
//         setNote(noteText);
//       } catch(error) {
//         setNoteLoadingError((error as Error).message)
//       } finally {
//         setNoteLoading(false);
//       }
//     })();
//   }, [location]);

//   if (noteLoading) return <div>Загрузка конспекта...</div>
//   if (noteLoadingError) return <div>noteLoadingError</div>

//   return (
//     <div>
//       <MarkdownBox content={note} basePath={location.pathname} />
//     </div>
//   )
// }