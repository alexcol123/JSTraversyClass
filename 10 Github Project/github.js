
class Github {
  constructor(){
    this.client_id = 'a09be62187f833d5c354';
    this.client_secret = 'a18e0c005662bf1a9a3fda811bd42c5a547e26bb';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';

  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}






