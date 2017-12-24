<style>
  * {
  margin: 0;
  padding: 0;
}

body {
  background-color: #64666e;
  color: #555;
  font-size: 1.1em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.nav-link {
  display: block;
  margin-bottom: 0.5em;
}

h3 {
  margin-bottom: 0.5em;  
}

p {
  line-height: 1.5;
  margin-bottom: 1em;
}

.container {
  display: grid;
  grid-template-columns: 8em auto 8em;
  grid-template-rows: 5em auto auto auto 3em;
}

header {
  background-color: lemonchiffon;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  background-color: mistyrose;
  padding: 0.5em;
}

article {
  padding: 0.5em;
  background: #fff;
}

aside {
  background-color: lavender;
  padding: 0.5em;
  
}

footer {
  background-color: silver;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  grid-column: 1 / 4;
  grid-row: 5;
}

@media screen and (max-width: 479px) {
  header {
    grid-column: 1 / 4;
  }
  
  article {
    grid-column: 1 / 4;
    grid-row: 2;
  }
  
  aside {
    grid-column: 1 / 4;
    grid-row: 3;
  }
  
  nav {
    grid-column: 1 / 4;
    grid-row: 4;
  }
}

@media screen and (min-width: 480px) and (max-width: 639px) {
  nav {
    grid-column: 1;
    grid-row: 2;
  }
  
  aside {
    grid-column: 1;
    grid-row: 3 / 5;
  }

  article {
    grid-column: 2 / 4;
    grid-row: 1 / 5;
  }
}

@media screen and (min-width: 640px) {
  header {
    grid-column: 1 / 4;
  }

  nav {
    grid-row: 2 / 5;
    grid-column: 1;
  }
  
  aside { 
    grid-row: 2 / 5;
    grid-column: 3;
  }

  article {
    grid-row: 2 / 5;
    grid-column: 2;
  }
}

</style>

<template>
  <div class="container">
  <header>
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">Title</h3>
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>
  </header>
  <article>
    <p>“It is very sad then that so many children are hurried along and not given time to think about themselves. People say to them when they think that they have been playing long enough: “You are no longer a child. You must begin to do something.” But although playing is doing nothing, you are really doing something when you play; you are thinking about yourself. Many children play in the wrong way. They make work out of play. They not only seem to be doing something, they really are doing something. They are imitating the grown-ups around them who are always doing as much instead of as little as possible. And they are often encouraged to play in this way by the grown-ups. And they are not learning to be themselves.”</p>
    <p>“There are many people who are not entirely themselves because as children they were not given time to think about themselves. And because they don’t know everything about themselves they can’t know everything about everything. But no one likes to admit that she doesn’t know everything about everything. And so these people try to make up for not knowing everything about everything by doing things.”</p>
    <p><small>Source: <em>Four Unposted Letters to Catherine</em> by Laura Riding</small></p>
  </article>
  <nav>
    <h3>Navigation</h3>
    <a class="nav-link" href="javascript:void(0)">Home</a>
    <a class="nav-link" href="javascript:void(0)">Chapter 1</a>
    <a class="nav-link" href="javascript:void(0)">Chapter 2</a>
    <a class="nav-link" href="javascript:void(0)">Chapter 3</a>
    <a class="nav-link" href="javascript:void(0)">Chapter 4</a>
  </nav>
  <aside>
    <h3>Sidebar</h3>
    <p>“A work of art is good if it has sprung from necessity. In this nature of its origin lies the judgment of it: there is no other.”<br>- Rainer Maria Rilke</p>
  </aside>
  <footer>Footer</footer>
</div>
</template>

<script>

  export default {

  }
</script>