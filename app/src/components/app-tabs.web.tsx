import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { Pressable, View, StyleSheet, useWindowDimensions } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { MaxContentWidth, Spacing } from '@/constants/theme';

const tabs = [
  { name: 'index', href: '/', label: 'Ana Sayfa' },
  { name: 'yemek', href: '/yemek', label: 'Yemek' },
  { name: 'duyurular', href: '/duyurular', label: 'Duyurular' },
  { name: 'program', href: '/program', label: 'Program' },
  { name: 'linkler', href: '/linkler', label: 'Linkler' },
] as const;

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          {tabs.map((tab) => (
            <TabTrigger key={tab.name} name={tab.name} href={tab.href} asChild>
              <TabButton>{tab.label}</TabButton>
            </TabTrigger>
          ))}
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  const { width } = useWindowDimensions();
  const compact = width < 420;

  return (
    <Pressable {...props} style={({ pressed }) => [styles.tabButton, pressed && styles.pressed]}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <ThemedText
          type="small"
          numberOfLines={1}
          themeColor={isFocused ? 'text' : 'textSecondary'}
          style={[styles.tabLabel, compact && styles.tabLabelCompact]}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        {props.children}
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: Spacing.two,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.one,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.half,
    maxWidth: MaxContentWidth,
    width: '100%',
  },
  pressed: {
    opacity: 0.7,
  },
  tabButton: {
    flex: 1,
    minWidth: 0,
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.half,
    borderRadius: Spacing.three,
    alignItems: 'center',
  },
  tabLabel: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 16,
  },
  tabLabelCompact: {
    fontSize: 11,
    lineHeight: 14,
  },
});
