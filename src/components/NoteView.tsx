import { useEffect, useState } from "react"
import { MarkdownBox } from "./MarkdownBox";
import { useLocation } from "react-router-dom";


export function NoteView() {
  const location = useLocation();
  
  const [note, setNote] = useState('');
  const [noteLoading, setNoteLoading] = useState(false);
  const [noteLoadingError, setNoteLoadingError] = useState(null);

  useEffect(() => {
    (async () => {
      const url = `${location.pathname}/index.md`;
      setNoteLoading(true);
      try {
        const note = await fetch(url);
        const noteText = await note.text();
        setNote(noteText);
      } catch(error) {
        setNoteLoadingError(error.message)
      } finally {
        setNoteLoading(false);
      }
    })();
  }, [location]);

  if (noteLoading) return <div>Загрузка конспекта...</div>
  if (noteLoadingError) return <div>noteLoadingError</div>

  return (
    <div>
      {/* <MarkdownBox content={note} basePath={location.pathname.split('/').slice(0, -1).join('/')} /> */}
      <MarkdownBox content={note} basePath={location.pathname} />
    </div>
  )
}