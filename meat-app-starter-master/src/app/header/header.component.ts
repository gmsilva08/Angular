<!-- Início do header -->
<header class="main-header">
  <nav class="navbar navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <a [routerLink]="'/'" class="navbar-brand"><b>Meat</b></a>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
          <i class="fa fa-bars"></i>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
        <ul class="nav navbar-nav">
          <li routerLinkActive="active"><a [routerLink]="['/restaurants']">Restaurantes</a></li> 
            <li routerLinkActive="active"><a [routerLink]="['/about']">Sobre</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->

    </div>
  </nav>
  </header>
  <!-- Fim do header -->