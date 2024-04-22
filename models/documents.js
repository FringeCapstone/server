const db = require("../util/firestore");

module.exports = class Documents {
  static async fetchAllDoc() {
    try {
      const snapshot = await db.collection('research_blogs').get();
      if (snapshot.empty) {
        console.log('No documents found.');
        return [];
      }
      return snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}));
    } catch (error) {
      console.error('Error getting documents', error);
      throw error;
    }
  }

  static async fetchDocument(id) {
    try {
      const docRef = db.collection('research_blogs').doc(id);
      const doc = await docRef.get();

      if (!doc.exists) {
        console.log('No document found with ID:', id);
        return null;
      }

      return {id: doc.id, data: doc.data()};
    } catch (error) {
      console.error('Error getting document with ID:', id, error);
      throw error;
    }
  }

};
