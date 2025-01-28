class SearchPage {
    // Elemen pada halaman
    get searchBar() {
      return cy.get("#searchTerm"); // Kolom pencarian
    }
  
    // Aksi untuk memasukkan kata kunci pencarian
    searchForKeyword(keyword) {
      this.searchBar.clear().type(keyword); // Bersihkan dan ketik kata kunci
    }
  
    // Aksi untuk menekan tombol "Enter"
    pressEnter() {
      this.searchBar.type('{enter}');  // Menekan tombol "Enter"
    }
  
  }
  
  export default new SearchPage();
  