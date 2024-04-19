const db = require("../util/firestore");

module.exports = class Journals {
  static async fetchAll() {
    try {
      const snapshot = await db.collection('users').get();
      if (snapshot.empty) {
        console.log('No documents found.');
        return [];
      }
      return snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    } catch (error) {
      console.error('Error getting documents', error);
      throw error;
    }
  }
  static async fetchAllDoc() {
    try {
      const snapshot = await db.collection('research_blogs').get();
      if (snapshot.empty) {
        console.log('No documents found.');
        return [];
      }
      return snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    } catch (error) {
      console.error('Error getting documents', error);
      throw error;
    }
  }

  static async fetchAllJournals(id) {
    try {
      const snapshot = await db.collection('users').doc(id).collection('journal').get();
      if (snapshot.empty) {
        console.log('No documents found.');
        return [];
      }
      return snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    } catch (error) {
      console.error('Error getting Journals', error);
      throw error;
    }
  }

  static async addJournal(id, content) {
    try {
      const journalEntry = db.collection('users').doc(id).collection('journal').doc();
      await journalEntry.set({
        content: content,
        time: new Date()
      });
    } catch (error) {
      console.error('Error adding journal entry', error);
      throw error;
    }
  }
};


