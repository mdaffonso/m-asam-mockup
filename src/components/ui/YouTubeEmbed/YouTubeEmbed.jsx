import styles from "./YoutubeEmbed.module.scss"
export const YoutubeEmbed = ({ embed, title, ...otherProps }) => {
  const embedId = embed.replace("https://www.youtube.com/watch?v=", "")

  return(
    <div className={styles.EmbedWrapper} {...otherProps}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  )
}