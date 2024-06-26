import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { AppContext } from '../context/AppContext';

const DocumentUploadScreen = () => {
  const [state, setState] = useContext(AppContext);
  const [document, setDocument] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setDocument(result);
      setState({ ...state, documents: [...state.documents, result] });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Documents</Text>
      <Button title="Pick a Document" onPress={pickDocument} />
      {document && <Text>{document.name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DocumentUploadScreen;
