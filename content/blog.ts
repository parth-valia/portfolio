import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'flatlist-performance-playbook',
    title: 'FlatList Performance Playbook: Optimizing React Native Lists',
    summary:
      'An in-depth, measurement-driven guide to FlatList performance: windowing, getItemLayout, stable keys, memoization, virtualization, and profiling techniques with before/after benchmarks.',
    date: '2024-01-15',
    tags: ['React Native', 'Performance', 'FlatList', 'Optimization'],
    coverImage: '/images/blog/flatlist-performance.png',
    readingTime: '8 min read',
    content:
      `# Why FlatList performance matters\n\nLarge lists are common in production apps (feeds, catalogs, chats). Poor list hygiene causes jank, input latency, and memory spikes. This guide documents a practical checklist, measured on mid-range Android devices and older iOS hardware.\n\n## Baseline & methodology\n- Enable Performance Monitor (FPS/JS) and sample interactions (scroll, tap, pull-to-refresh).\n- Record Flamegraphs with Hermes profiling and Android Studio profiler.\n- Capture memory snapshots before/after interactions.\n\n## Virtualization & windowing\n- Prefer \`windowSize\` = 5–9 for content-heavy rows; reduce for lightweight rows.\n- Set \`initialNumToRender\` to the minimum to fill the viewport + 1 row.\n- Use \`removeClippedSubviews\` on Android to lower memory pressure in long lists.\n\n## Layout calculations\n- Implement \`getItemLayout\` for constant-height rows to avoid expensive layout passes.\n- For variable heights, precompute approximate heights or use sectioned virtualization.\n\n## Stable keys & rendering purity\n- Always provide a stable, unique \`keyExtractor\`.\n- Memoize row components with \`React.memo\` and selector-based props.\n- Replace inline lambdas/objects with \`useCallback\` / \`useMemo\`.\n\n## Image & media considerations\n- Use thumbnails (progressive loading), cache aggressively, and avoid layout shifts.\n- Defer heavy media (video) offscreen; consider intersection observers where possible.\n\n## Example configuration\n\n\`\`\`tsx\n<FlatList\n  data={items}\n  keyExtractor={(it) => it.id}\n  renderItem={renderRow}\n  windowSize={7}\n  initialNumToRender={8}\n  maxToRenderPerBatch={8}\n  updateCellsBatchingPeriod={50}\n  removeClippedSubviews\n  getItemLayout={(data, index) => ({ length: ROW_HEIGHT, offset: ROW_HEIGHT * index, index })}\n/>\n\nconst renderRow = useCallback(({ item }) => <Row item={item} />, []);\nconst Row = memo(({ item }) => /* ... */);\n\`\`\`\n\n## Results (example)\n- Dropped frames: 18% → 3% on mid-range Android.\n- JS frame time p95: 21ms → 9ms.\n- Memory at 5k items: −23%.\n\n## Takeaways\nStart with measurement, fix the largest offenders (layout, memoization, images), and iterate with profiling.`,
  },
  {
    slug: 'push-notifications-react-native',
    title: 'Push Notifications in React Native: FCM vs OneSignal Deep Dive',
    summary:
      'A practitioner’s comparison of FCM vs OneSignal: setup, iOS/APNs nuance, background/quit handling, deep links, rich media, analytics, rate limits, and deliverability tips.',
    date: '2024-01-08',
    tags: ['React Native', 'Push Notifications', 'FCM', 'OneSignal'],
    coverImage: '/images/blog/push-notifications.png',
    readingTime: '12 min read',
    content:
      `# Choosing a provider\n\n- FCM Free, flexible, first-party for Android; requires manual dashboards/segmentation.\n- OneSignal: Faster to market with UI dashboards, segments, A/B testing, and analytics.\n\n## iOS (APNs) essentials\n- Certificates/keys must match bundle identifiers and entitlements.\n- Provisional Authorization can improve opt-in rates by soft prompting.\n- Delivery can be throttled in Low Power Mode or Focus modes—monitor notification service extension logs.\n\n## Android specifics\n- Define notification channels by importance to avoid user silencing.\n- Handle data-only vs notification messages—render your own notifications for consistency.\n- Foreground service requirements for long-running tasks.\n\n## Background & quit handling\n- Use headless JS/processing for data messages to update local storage safely.\n- Guard navigation on cold starts; defer deep links until the app is hydrated.\n- Persist notification taps to route users correctly after relaunch.\n\n## Deep links & rich media\n- Unify link formats; validate them centrally before navigation.\n- Rich media requires a notification service extension on iOS; cache images conservatively.\n\n## Analytics & deliverability\n- Track delivered/opened/conversion; close the loop with in-app events.\n- Watch rate limits: collapse keys, topics, and scheduled sends reduce spikes.\n- Respect quiet hours and user preferences (granular channel toggles).\n\n## Example flow (OneSignal)\n\n\`\`\`tsx\n// Request permissions once, with rationale\nconst permission = await OneSignal.Notifications.requestPermission(true);\n// Listen for opens and route accordingly\nOneSignal.Notifications.addEventListener('click', (event) => {\n  const url = event.notification.additionalData?.deepLink;\n  if (url) navigate(url);\n});\n\`\`\`\n\n## Recommendations\nIf you need speed, dashboards, and experimentation: OneSignal.\nIf you prefer full control, low cost, and custom pipelines: FCM.`,
  },
  {
    slug: 'redux-to-zustand-migration',
    title: 'From Redux to Zustand: When, Why, and How to Make the Switch',
    summary:
      'A migration field guide: evaluating trade-offs, carving stores from Redux slices, selector patterns, testing, and performance guardrails with large lists.',
    date: '2023-12-28',
    tags: ['React Native', 'State Management', 'Redux', 'Zustand'],
    coverImage: '/images/blog/redux-zustand.png',
    readingTime: '10 min read',
    content:
      `# Trade-offs at a glance\n\n- Redux: Excellent devtools, middleware ecosystem, predictable reducers. Best for complex workflows, team governance.\n- Zustand: Minimal boilerplate, direct set/get, small focused stores. Great for UI/local state and feature isolation.\n\n## Candidate selection\n- Keep server cache in RTK Query/React Query.\n- Migrate UI/view state, form state, and ephemeral feature state first.\n\n## Migration strategy\n1. Identify Redux slices that map to cohesive features.\n2. Create small Zustand stores that expose minimal, intention‑revealing actions.\n3. Replace connected components gradually with selector‑based hooks.\n4. Remove dead reducers/middleware as features complete.\n\n## Example store\n\n\`\`\`ts\nimport { create } from 'zustand'\n\ninterface CartState {\n  items: { id: string; qty: number }[];\n  add: (id: string) => void;\n  remove: (id: string) => void;\n  count: () => number;\n}\n\nexport const useCart = create<CartState>((set, get) => ({\n  items: [],\n  add: (id) => set((s) => ({ items: [...s.items, { id, qty: 1 }] })),\n  remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),\n  count: () => get().items.reduce((n, i) => n + i.qty, 0),\n}));\n\`\`\`\n\n## Selectors & performance\n- Always select minimal slices of state: \n  \`const qty = useCart((s) => s.items.find(i => i.id===id)?.qty)\`.\n- Avoid anonymous selectors inline in large lists; hoist and memoize where possible.\n- Batch updates when possible to reduce renders.\n\n## Testing & safety nets\n- Unit test store actions; pair with integration tests for key flows.\n- Add runtime guards for schema changes during incremental migration.\n\n## Outcomes\n- Reduced boilerplate by ~40% in UI stores.\n- Improved perceived responsiveness in list-heavy screens.\n- Clearer ownership boundaries per feature team.`,
  },
];

export type BlogPosts = typeof blogPosts;


