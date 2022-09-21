# promotion-banner

## changelog

## 安装

```
npm install promotion-banner -S
```

## 调用示例

```tsx
import { PromotionBanner } from 'promotion-banner';

const renderBtmBanner = () => {
  // 埋点
  const myTrack = (extra: object, type?: string) => {
    // 自己要处理跳转链接逻辑哦！
    let params = {
      page_type: PAGE_TYPE.spl_home,
      target_type: TARGET_TYPE.banner,
      data: {
        from_source: getFromSource(),
        ...extra,
      }
    }
    if (type) {
      Object.assign(params, { type })
    }
    onTrack(params)
  }
  return (
    <PromotionBanner
      onClickBanner={(extra) => myTrack(extra)}
      onImpression={(extra) => myTrack(extra, 'addImpressionTrack')}
      mode="popup"
      biz_country={REGION}
      eventCode={'SPL_HOMEPAGE_1'}
    />
  )
}
```

## 参数签名

Props:

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| mockSpaceKey | 指定 spaceKey 便于调试 banner 效果，生成环境千万不能用 | `string` | - |
| wrapperClassName | 外层容器 class, 方便设置样式 | `string` | - |
| eventCode | 事件ID，由 Promotion 团队提供 | `string` | - |
| biz_country | 地区 | `th` \| `ph` \| `my` \| `id` \| `tw` | `true` |
| mode | banner 模式 | `normal` \| `popup` | `normal` |
| immediateShow | 是否立即显示，方便调用者控制(比如多个弹窗顺序控制) | `boolean` | `true` |
| onClickBanner | banner 点击事件 | `(data: BannerClickPayload, index: number) => void` | - |
| onImpression | 曝光事件 | `(data: {}) => void` | - |
| onCallback | 任意事件都触发 | `onCallback?: (eventType: EventType, payload: any) => void` | - |
| useFallback | true 时，展示默认 banner | `boolean` | `false` |

Refs:

| 属性 | 类型 | 说明 |
| :- | :- | :- |
| show | `() => void`|  展示 popup |
| close | `() => void` | 关闭 popup |

```tsx
export type BannerMode = 'normal' | 'popup';
export type EventType = 'CLICK' | 'IMPRESSION' | 'CHANGE' | 'LOAD' | 'SCROLL' | 'OPEN' | 'CLOSE';
export interface BannerClickPayload {
  target_url: string;
  banner_url: string;
  image_hash: string;
  banner_id: string;
  campaign_unit_id: string;
  banner_source: string;
  location: string;
  extension: string;
}
```

## 相关文档

- promotion: https://confluence.shopee.io/display/SK/v2.5.0+voucher+integrates+with+quota+tech+design
- PRD: https://confluence.shopee.io/pages/viewpage.action?pageId=717522683
- BMS Integration Guideline: https://confluence.shopee.io/display/SDLT/BMS+Integration+Guideline
- SDK http://at1yg9.shaoyi.li.vd.dev.cloud.shopee.io:8082/home/ld-shaoyi_li/shopee-banner-sdk/packages/banner-sdk-react-components-web/storybook-static/?path=/story/example-introduction--page