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

  }
};
