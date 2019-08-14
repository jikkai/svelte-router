<aside class="sr-menu">
  <ul>
    <li>
      <Link to="/">Introduction</Link>
    </li>
    <li>
      <Link to="/installation">Installation</Link>
    </li>
    <li>
      <div class="sr-menu-group">
        <span>Getting Started</span>
        <ul>
          <li>
            <Link to="/guide/basic-usage" replace>Basic Usage</Link>
          </li>
          <li>
            <Link to="/guide/api">API</Link>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="sr-menu-group">
        <span>Component</span>
        <ul>
          <li>
            <Link to="/component/router-link" replace>Link</Link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</aside>

<script>
  import { Link } from '../../src'
</script>

<style>
  .sr-menu {
    width: 240px;
    height: 100%;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .05);
    overflow: auto;
  }

  .sr-menu ul {
    padding: 0;
    list-style: none;
  }

  .sr-menu :global(a) {
    padding: 6px 0 6px 24px;
    color: var(--sliver);
    display: block;
  }
  .sr-menu :global(a.router-link-active) {
    color: var(--primary);
    box-shadow: 4px 0px 0px inset var(--primary);
  }

  .sr-menu-group span {
    padding: 6px 0 6px 24px;
    color: var(--sliver);
    font-weight: bold;
    display: block;
  }

  .sr-menu-group :global(a) {
    padding-left: 36px;
  }

  @media screen and (max-width: 810px) {
    .sr-menu {
      width: 100%;
      overflow: initial;
    }
  }
</style>
