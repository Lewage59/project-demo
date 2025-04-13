export const basicSchema1 = {
  type: 'layout',
  style: {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
  },
  children: [
    {
      type: 'text',
      content: '这是一个基础卡片示例1',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '16px'
      }
    },
    {
      type: 'image',
      src: 'https://picsum.photos/300/200',
      style: {
        marginBottom: '16px'
      }
    },
    {
      type: 'text',
      content: '这是一段描述文本',
      style: {
        marginBottom: '16px'
      }
    },
    {
      type: 'link',
      content: '点击查看更多',
      href: 'https://example.com',
      style: {
        alignSelf: 'center'
      }
    }
  ]
}

export const basicSchema2 = {
  type: 'layout',
  style: {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
  },
  children: [
    {
      type: 'text',
      content: '这是一个基础卡片示例2',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '16px'
      }
    },
    {
      type: 'image',
      src: 'https://picsum.photos/300/200',
      style: {
        marginBottom: '16px'
      }
    },
    {
      type: 'text',
      content: '这是一段描述文本',
      style: {
        marginBottom: '16px'
      }
    },
    {
      type: 'link',
      content: '点击查看更多',
      href: 'https://example.com',
      style: {
        alignSelf: 'center'
      }
    }
  ]
}

export const articleSchema = {
  type: 'layout',
  style: {
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  children: [
    {
      type: 'text',
      content: '这是一篇精彩的文章标题',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px'
      }
    },
    {
      type: 'layout',
      style: {
        flexDirection: 'row',
        gap: '16px',
        marginBottom: '24px',
        color: '#666'
      },
      children: [
        {
          type: 'text',
          content: '作者：张三'
        },
        {
          type: 'text',
          content: '发布时间：2024-03-20'
        }
      ]
    },
    {
      type: 'image',
      src: 'https://picsum.photos/800/400',
      style: {
        width: '100%',
        borderRadius: '8px',
        marginBottom: '24px'
      }
    },
    {
      type: 'text',
      content: '这是文章的摘要内容，介绍了这篇文章的主要内容和亮点。通过简短的描述，让读者快速了解文章的核心价值。',
      style: {
        fontSize: '16px',
        lineHeight: '1.8',
        marginBottom: '24px'
      }
    },
    {
      type: 'layout',
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      children: [
        {
          type: 'layout',
          style: {
            flexDirection: 'row',
            gap: '12px'
          },
          children: [
            {
              type: 'link',
              content: '点赞',
              href: '#',
              style: {
                color: '#1890ff'
              }
            },
            {
              type: 'link',
              content: '收藏',
              href: '#',
              style: {
                color: '#1890ff'
              }
            }
          ]
        },
        {
          type: 'link',
          content: '阅读全文',
          href: '#',
          style: {
            padding: '6px 16px',
            backgroundColor: '#1890ff',
            color: '#fff',
            borderRadius: '4px'
          }
        }
      ]
    }
  ]
}

export const productSchema = {
  type: 'layout',
  style: {
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #eee'
  },
  children: [
    {
      type: 'image',
      src: 'https://picsum.photos/400/400',
      style: {
        width: '100%',
        borderRadius: '4px',
        marginBottom: '16px'
      }
    },
    {
      type: 'text',
      content: '商品名称',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px'
      }
    },
    {
      type: 'layout',
      style: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: '8px',
        marginBottom: '16px'
      },
      children: [
        {
          type: 'text',
          content: '¥',
          style: {
            fontSize: '14px',
            color: '#ff4d4f'
          }
        },
        {
          type: 'text',
          content: '199.00',
          style: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#ff4d4f'
          }
        },
        {
          type: 'text',
          content: '¥299.00',
          style: {
            fontSize: '14px',
            color: '#999',
            textDecoration: 'line-through'
          }
        }
      ]
    },
    {
      type: 'text',
      content: '商品描述信息，介绍商品的特点和优势',
      style: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '16px'
      }
    },
    {
      type: 'layout',
      style: {
        flexDirection: 'row',
        gap: '12px'
      },
      children: [
        {
          type: 'link',
          content: '加入购物车',
          href: '#',
          style: {
            flex: 1,
            padding: '8px 0',
            textAlign: 'center',
            backgroundColor: '#fff',
            color: '#ff4d4f',
            border: '1px solid #ff4d4f',
            borderRadius: '4px'
          }
        },
        {
          type: 'link',
          content: '立即购买',
          href: '#',
          style: {
            flex: 1,
            padding: '8px 0',
            textAlign: 'center',
            backgroundColor: '#ff4d4f',
            color: '#fff',
            borderRadius: '4px'
          }
        }
      ]
    }
  ]
} 