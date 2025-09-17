import Markdown from 'react-markdown';
import { SourceCodeBox } from './SourceCodeBox';
import rehypeRaw from 'rehype-raw';


export const MarkdownBox = ({ content, basePath = '' }) => {
  // const urlTransform  = (src) => src.startsWith('/') ? src : `${basePath}/${src}`

  return (
    content === '' ? <div>Нечего отображать</div> :
      <Markdown
        children={content}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => <h1 className="my-cool-h1">{children}</h1>,
          img: ({ src, alt, ...props }) => {
            // console.log('Путь до картинки из md: ' + src);
            // console.log('Путь до картинки трансофрмированный: ' + urlTransform(src));
            return <img 
              src={`${basePath}/${src}`} 
              // src={urlTransform(src)} 
              // src='/konspekt/html-css/css/flexbox/img/row-column-space.png'
              alt={alt} 
              {...props}
              style={{ maxWidth: '100%' }}
            />
          },
          code(props) {
            const {children, className, node, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SourceCodeBox sourceCode={children} language={match[1]} {...rest} />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
  )
}