import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}
      labelVisibilityMode="labeled">
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Ana Sayfa</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="yemek">
        <NativeTabs.Trigger.Label>Yemek</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="fork.knife" md="restaurant" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="duyurular">
        <NativeTabs.Trigger.Label>Duyurular</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="megaphone" md="campaign" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="program">
        <NativeTabs.Trigger.Label>Program</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="calendar" md="calendar_month" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="linkler">
        <NativeTabs.Trigger.Label>Linkler</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="link" md="link" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
