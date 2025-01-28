class LoginPage {
    // Elemen pada halaman login
    get usernameField() {
      return cy.get('#user_login'); // Menemukan kolom username
    }
  
    get passwordField() {
      return cy.get('#user_password'); // Menemukan kolom password
    }
  
    get submitButton() {
      return cy.get('input[name="submit"]'); // Menemukan tombol submit
    }
  
    // Aksi untuk login
    login(username, password) {
      this.usernameField.clear().type(username); // Memasukkan username
      this.passwordField.clear().type(password); // Memasukkan password
      this.submitButton.click(); // Menekan tombol submit
    }
  }

  export default new LoginPage();