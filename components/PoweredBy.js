import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'> </span>
      <a
        href='https://beian.miit.gov.cn'
        className='underline justify-start'>
        京ICP备2022024716号-1
      </a>
      .
    </div>
  )
}
