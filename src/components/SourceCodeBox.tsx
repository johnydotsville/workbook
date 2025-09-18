import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { Box, Button } from '@mui/material';
// import ClipboardIcon from '@mui/icons-material/FileCopy';


interface SourceCodeBoxProps {
  sourceCode: any;
  style?: any;
  language?: string;
}


export const SourceCodeBox = ({ sourceCode, style = dracula, language = "typescript", ...rest }: SourceCodeBoxProps) => {
  return (
    <div>
      {/* <Button 
        onClick={() => handleCopyToClipboard(String(sourceCode))}
        aria-label="Копировать"
        size="small"
        color='warning'
        sx={{ position: 'absolute', top: '1rem', right: '0.25rem' }}
      >
        <ClipboardIcon />
      </Button> */}
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={String(sourceCode).replace(/\n$/, '')}
        language={language}
        style={style}
      />
    </div>
  )
}


// async function handleCopyToClipboard(text: string) {
//   try {
//     await navigator.clipboard.writeText(text);
//   } catch (err) {
//     alert('Ошибка копирования.');
//   }
// };