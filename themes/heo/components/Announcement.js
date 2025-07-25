import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className }) => {
  if (post?.blockMap) {
    return (
      <div className={className}>
        {post && (
          <div id="announcement-content">
            <NotionPage post={post} />
            {/* 如果 post 中有头像数据，则显示头像 */}
            {post.avatar && (
              <img
                src={post.avatar}
                alt="Avatar"
                className="announcement-avatar"
              />
            )}
          </div>
        )}
      </div>
    )
  } else {
    return <></>
  }
}

export default Announcement
