/* eslint-disable react/no-unknown-property */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #f7f9fe;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      /* 修复公告栏头像图片显示问题 (重要修改!) */
      #theme-heo .post-announcement .notion-page-content .notion-collection-card .notion-collection-card-cover {
        /* 移除默认的模糊效果 */
        filter: none !important;
        /* 防止头像被裁剪 */
        overflow: visible !important;
        /* 确保高度自适应 */
        height: auto !important;
        /* 阻止过渡动画 */
        transition: none !important;
      }
      
      /* 确保头像清晰可见 */
      #theme-heo .post-announcement .notion-page-content .notion-collection-card .notion-image {
        /* 始终完全可见 */
        opacity: 1 !important;
        /* 移除默认的模糊效果 */
        filter: none !important;
        /* 阻止过渡动画 */
        transition: none !important;
        /* 保证图片比例正常 */
        object-fit: contain !important;
        /* 防止图片被放大 */
        transform: scale(1) !important;
      }
      
      /* 鼠标悬停时保持图片可见 */
      #theme-heo .post-announcement .notion-page-content .notion-collection-card:hover .notion-image {
        /* 悬停时也保持完全可见 */
        opacity: 1 !important;
        /* 悬停时也保持清晰 */
        filter: none !important;
      }
    `}</style>
  )
}

export { Style }
