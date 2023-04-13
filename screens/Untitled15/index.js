import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSave = () => {// Save changes made in edit mode
  };

  return <View style={styles.container}>
      <Image source={require('../assets/profile-picture.png')} style={styles.avatar} />
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your full name" />
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Enter your username" />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your email" keyboardType="email-address" />
      <Text style={styles.label}>Bio</Text>
      <TextInput style={styles.bioInput} value={bio} onChangeText={setBio} placeholder="Enter your bio" multiline={true} />
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput style={styles.input} value={dob} onChangeText={setDob} placeholder="Select your date of birth" />
      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity style={[styles.genderButton, gender === 'female' && styles.genderButtonSelected]} onPress={() => setGender('female')}>
          <Text style={styles.genderButtonText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.genderButton, gender === 'male' && styles.genderButtonSelected]} onPress={() => setGender('male')}>
          <Text style={styles.genderButtonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.genderButton, gender === 'preferNotToSay' && styles.genderButtonSelected]} onPress={() => setGender('preferNotToSay')}>
          <Text style={styles.genderButtonText}>Prefer not to say</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} value={streetAddress} onChangeText={setStreetAddress} placeholder="Enter your street address" />
      <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder="Enter your city" />
      <TextInput style={styles.input} value={zipCode} onChangeText={setZipCode} placeholder="Enter your zip code" />
      <TextInput style={styles.input} value={state} onChangeText={setState} placeholder="Enter your state" />
      <TextInput style={styles.input} value={country} onChangeText={setCountry} placeholder="Enter your country" />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10
  },
  editButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end'
  },
  editButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  bioInput: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 100,
    textAlignVertical: 'top'
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  genderButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center'
  },
  genderButtonSelected: {
    backgroundColor: '#007AFF'
  },
  genderButtonText: {
    fontWeight: 'bold'
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginTop: 20
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ProfileScreen;