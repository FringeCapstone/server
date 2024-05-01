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

  static async fetchJournals(id) {
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

  static async updateJournal(userId, journalID, content) {
    try {
      db.collection('users').doc(userId).collection('journals').doc(journalID)
          .update({
            content: content,
            updatedTime: new Date()
          })
          .then(() => {
            console.log('Journal successfully updated!');
          })
    } catch (error) {
      console.error('Error updating journal: ', error);
      throw error;
    }
  }

  static async deleteJournal(userId, journalId) {
    try {
      const journalRef = db.collection('users').doc(userId).collection('journal').doc(journalId);
      await journalRef.delete();
      console.log('Journal entry deleted successfully.');
    } catch (error) {
      console.error('Error deleting journal entry', error);
      throw error;
    }
  }
};


