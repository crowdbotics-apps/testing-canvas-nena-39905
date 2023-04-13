import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('I am a software engineer');
  const [profilePic, setProfilePic] = useState(require('./assets/profile-pic.png'));
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Profile picture clicked')}>
          <Image source={profilePic} style={styles.profilePic} />
        </TouchableOpacity>
        <Text style={styles.username} onPress={() => console.log('Username clicked')}>
          {name}
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Name</Text>
        {isEditing ? <TextInput style={styles.input} value={name} onChangeText={text => setName(text)} /> : <Text style={styles.text}>{name}</Text>}
        <Text style={styles.label}>Bio</Text>
        {isEditing ? <TextInput style={styles.input} value={bio} onChangeText={text => setBio(text)} /> : <Text style={styles.text}>{bio}</Text>}
        {isEditing ? <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>}
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  body: {
    flex: 1
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 20
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default ProfileScreen;