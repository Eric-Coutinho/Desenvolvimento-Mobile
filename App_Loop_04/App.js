import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

export default function App() {
  const menu = [
    { key: 'appointments', label: 'Appointments', path: require('./assets/clock.png') },
    { key: 'trips', label: 'Trips', path: require('./assets/trip.png') },
    { key: 'passwords', label: 'Passwords', path: require('./assets/password.png') },
    { key: 'pitches', label: 'Pitches', path: require('./assets/pitch.png') },
    { key: 'updates', label: 'Updates', path: require('./assets/update.png') },
  ];

  const contacts = [
    { name: 'Amy Farha', title: 'Vice President' },
    { name: 'Chris Jackson', title: 'Vice Chairman' },
    { name: 'Amanda Martin', title: 'CEO' },
    { name: 'Christy Thomas', title: 'Lead Developer' },
    { name: 'Melissa Jones', title: 'CTO' },
  ];

  const tabs = [
    'Fire',
    'Devices',
    'Contacts',
    'Money',
    'More',
  ];

  const rootStyle = { flex: 1, backgroundColor: '#f8f9fb' };
  const scrollContentStyle = { paddingVertical: 20 };
  const sectionStyle = {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  };
  const rowStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  };
  const iconStyle = { width: 36, height: 36, borderRadius: 6, marginRight: 12 };
  const rowTextWrapStyle = { flex: 1 };
  const rowTitleStyle = { fontSize: 16, color: '#222' };
  const chevStyle = { fontSize: 18, color: '#bbb' };
  const contactSectionHeaderStyle = { marginHorizontal: 12, marginBottom: 6 };
  const contactSectionHeaderTextStyle = { color: '#999', fontSize: 12 };
  const contactRowStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  };
  const avatarStyle = { width: 44, height: 44, borderRadius: 22, marginRight: 12 };
  const contactTextStyle = { flex: 1 };
  const contactNameStyle = { fontSize: 16, color: '#222' };
  const contactTitleStyle = { fontSize: 12, color: '#999', marginTop: 2 };
  const tabBarStyle = {
    height: 64,
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 6,
  };
  const tabItemStyle = { flex: 1, alignItems: 'center', justifyContent: 'center' };
  const tabIconStyle = { width: 20, height: 20, marginBottom: 2 };
  const tabLabelStyle = { fontSize: 10, color: '#777' };
  const tabLabelActiveStyle = { color: '#007aff', fontWeight: '600' };

  return (
    <View style={rootStyle}>
      <ScrollView contentContainerStyle={scrollContentStyle}>
        <View style={sectionStyle}>
          {menu.map((item) => (
            <View key={item.key} style={rowStyle}>
              <Image source={item.path} style={iconStyle} />
              <View style={rowTextWrapStyle}>
                <Text style={rowTitleStyle}>{item.label}</Text>
              </View>
              <Text style={chevStyle}>&gt;</Text>
            </View>
          ))}
        </View>

        <View style={contactSectionHeaderStyle}>
          <Text style={contactSectionHeaderTextStyle}>Contacts</Text>
        </View>

        <View style={sectionStyle}>
          {contacts.map((c) => (
            <View key={c.name} style={contactRowStyle}>
              <Image source={require('./assets/profile-picture.png')} style={avatarStyle} />
              <View style={contactTextStyle}>
                <Text style={contactNameStyle}>{c.name}</Text>
                <Text style={contactTitleStyle}>{c.title}</Text>
              </View>
              <Text style={chevStyle}>&gt;</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      <View style={tabBarStyle}>
        {tabs.map((t) => (
          <View key={t} style={tabItemStyle}>
            <Image source={require('./assets/icon.png')} style={tabIconStyle} />
            <Text style={t === 'More' ? [tabLabelStyle, tabLabelActiveStyle] : tabLabelStyle}>{t}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
