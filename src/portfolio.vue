<template>
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <!-- Side Menu - Fixed on Right -->
    <div class="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div class="flex flex-col gap-6">
        <a
          v-for="item in menuItems"
          :key="item.name"
          :href="item.href"
          class="group relative flex items-center"
          :title="item.name"
        >
          <div class="w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 text-xl">
            {{ item.icon }}
          </div>
          <span class="absolute right-16 bg-slate-800/95 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-purple-500/30">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>

    <!-- Navigation -->
    <nav :class="['fixed top-0 w-full z-50 transition-all duration-300', scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            MonPortfolio
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <a
              v-for="item in navItems"
              :key="item"
              :href="`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`"
              class="hover:text-purple-400 transition-colors duration-200"
            >
              {{ item }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900/95 backdrop-blur-md">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            v-for="item in navItems"
            :key="item"
            :href="`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`"
            class="block px-3 py-2 hover:bg-purple-900/50 rounded-md"
            @click="isMenuOpen = false"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div class="text-center z-10 px-4">
        <div class="mb-8 relative inline-block">
          
        </div>
        <h1 class="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          ABDOU ISAAC
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
          Étudiant en BTS SIO - Option SLAM
        </p>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
          Développeur passionné | Solutions Logicielles et Applications Métier
        </p>
        <div class="flex gap-4 justify-center animate-fade-in-delay-3">
          
          <a
            href="#projets"
            class="border-2 border-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-200"
          >
            Mes Projets
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="a-propos" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          À Propos 🗨️
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-purple-300">Présentation</h3>
            <p class="text-gray-300 leading-relaxed">
              Salut, moi c'est <span class="text-purple-400 font-semibold">VOTRE NOM</span> 👋
            </p>
            <p class="text-gray-300 leading-relaxed">
              Je suis actuellement étudiant en première année de <span class="text-purple-400 font-semibold">BTS SIO</span> (Services Informatiques aux Organisations) dans l'option <span class="text-purple-400 font-semibold">SLAM</span> (Solutions Logicielles et Applications Métier).
            </p>
            <p class="text-gray-300 leading-relaxed">
              Passionné par le développement et les nouvelles technologies, je vous propose sur ce portfolio de découvrir mes différents projets et compétences acquises tout au long de mon parcours.
            </p>
            <a
              href="/cv.pdf"
              class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              Télécharger mon CV
            </a>
          </div>

          <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 class="text-2xl font-semibold mb-6 text-purple-300">Qu'est-ce que le BTS SIO ? 🎓</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Le BTS Services Informatiques aux Organisations forme en deux ans aux métiers de l'informatique avec deux spécialités :
            </p>
            
            <div class="space-y-4">
              <div class="border-l-4 border-purple-500 pl-4">
                <h4 class="font-semibold text-purple-400 mb-2">Option SLAM 👈 (ma filière)</h4>
                <p class="text-sm text-gray-400">
                  Solutions Logicielles et Applications Métier - Spécialisation en développement d'applications
                </p>
              </div>
              
              <div class="border-l-4 border-pink-500 pl-4">
                <h4 class="font-semibold text-pink-400 mb-2">Option SISR</h4>
                <p class="text-sm text-gray-400">
                  Solutions d'Infrastructure, Systèmes et Réseaux - Spécialisation en administration réseau
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parcours Section -->
    <section id="parcours" class="py-20 px-4 bg-slate-900/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Mon Parcours 🤵
        </h2>

        <!-- Parcours Professionnel -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold mb-8 text-purple-300">Parcours Professionnel 💼</h3>
          <div class="space-y-6">
            <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div class="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <h4 class="text-xl font-semibold text-purple-400">Stage BTS SIO 2ème année</h4>
                  <p class="text-gray-400">Entreprise / Ville</p>
                </div>
                <span class="bg-purple-500/20 px-4 py-1 rounded-full text-sm">Janvier - Mars 2026</span>
              </div>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>Développement d'une application web</li>
                <li>Mise en place de solutions logicielles</li>
                <li>Travail en équipe sur des projets clients</li>
              </ul>
            </div>

            <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div class="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <h4 class="text-xl font-semibold text-purple-400">Stage BTS SIO 1ère année</h4>
                  <p class="text-gray-400">Entreprise / Ville</p>
                </div>
                <span class="bg-purple-500/20 px-4 py-1 rounded-full text-sm">Mai - Juillet 2024</span>
              </div>
              <ul class="list-disc list-inside text-gray-300 space-y-2">
                <li>Découverte du milieu professionnel</li>
                <li>Participation à des projets de développement</li>
                <li>Apprentissage des méthodologies de travail</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Parcours Scolaire -->
        <div class="mb-16">
          <h3 class="text-3xl font-bold mb-8 text-purple-300">Parcours Scolaire 🎓</h3>
          <div class="relative">
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div class="space-y-8">
              <div class="relative pl-20">
                <div class="absolute left-5 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <div class="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 class="text-xl font-semibold text-purple-400">BTS SIO Option SLAM</h4>
                    <span class="text-sm text-gray-400">2023 - 2025</span>
                  </div>
                  <p class="text-gray-400 mb-2">Lycée Amiral Bouvet / Saint-Benoit</p>
                  <p class="text-gray-300 text-sm">Formation en développement d'applications et solutions logicielles</p>
                </div>
              </div>

              <div class="relative pl-20">
                <div class="absolute left-5 w-6 h-6 bg-pink-500 rounded-full border-4 border-slate-900"></div>
                <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <div class="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 class="text-xl font-semibold text-pink-400">BAC STI2D / BAC Général</h4>
                    <span class="text-sm text-gray-400">2020 - 2023</span>
                  </div>
                  <p class="text-gray-400 mb-2">Collège Amiral Bouvet/ Saint-Benoit</p>
                  <p class="text-gray-300 text-sm">Obtention du baccalauréat</p>
                </div>
              </div>

              <div class="relative pl-20">
                <div class="absolute left-5 w-6 h-6 bg-indigo-500 rounded-full border-4 border-slate-900"></div>
                <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <div class="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 class="text-xl font-semibold text-indigo-400">Brevet des Collèges</h4>
                    <span class="text-sm text-gray-400">2016 - 2020</span>
                  </div>
                  <p class="text-gray-400 mb-2">Collège / Ville</p>
                  <p class="text-gray-300 text-sm">Obtention du brevet avec mention</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Compétences -->
        <div>
          <h3 class="text-3xl font-bold mb-8 text-purple-300">Mes Compétences 👨‍💻</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div class="text-4xl mb-3 text-center">{{ skill.icon }}</div>
              <h3 class="text-lg font-semibold text-center mb-3">{{ skill.name }}</h3>
              <div class="w-full bg-slate-700 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
              <p class="text-center text-sm text-gray-400 mt-2">{{ skill.level }}%</p>
            </div>
          </div>

          <h3 class="text-3xl font-bold text-center mb-8 text-purple-300">Mes Outils ⚙️</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="tool in tools"
              :key="tool.name"
              class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <div class="text-4xl mb-3">{{ tool.icon }}</div>
              <h4 class="font-semibold">{{ tool.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projets" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          
          Mes Projets 🚧
        </h2>
        <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Découvrez tous mes projets réalisés à ce jour. Cliquez sur un projet pour en savoir plus !
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div class="relative overflow-hidden h-48">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              <div class="absolute bottom-4 left-4">
                <span class="bg-purple-500/80 px-3 py-1 rounded-full text-xs font-semibold">
                  {{ project.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-purple-400 mb-3">{{ project.tech }}</p>
              <p class="text-gray-400 text-sm">{{ project.description }}</p>
              <!-----Bouton section-->
              <a
              :href="project.href || '#accueil'"
              class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-200">

              </a>
              <!-------------->
              
      
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Veille Technologique Section -->
    <section id="veille" class="py-20 px-4 bg-slate-900/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Veille Technologique 📔
        </h2>
        <p class="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          La veille technologique consiste à surveiller les évolutions techniques et innovations dans un secteur d'activité. 
          Elle permet d'anticiper les changements et de rester informé des dernières tendances.
        </p>

        <!-- Thématique principale -->
        <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-12">
          <h3 class="text-2xl font-bold text-center mb-4 text-purple-300">
            Ma Thématique : L'Ordinateur Qantique
          </h3>
          <p class="text-center text-gray-300">
            Comment l'Ordinateur quantique transforme-t-elle notre quotidien et quel est son futur ?
          </p>
        </div>
        <!------lien veille----->
        



        <!-- Les 3 thèmes -->
        <div class="space-y-8">
           <!------lien veille----->
           <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <a href="https://www.lemondeinformatique.fr/actualites/lire-avec-nvqlink-et-cuda-q-nvidia-accelere-sur-le-quantique-98331.html"
             class="border-2 border-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-200  animate-float">
              lien teste</a>
           </div>

          <!-- Thème 1 -->
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 class="text-2xl font-bold mb-6 text-purple-400">
              Thème 1 : Qu'est-ce que l'Ordinateur quantique ? 🤖
            </h3>
            <div class="space-y-4">
              <div class="border-l-4 border-purple-500 pl-4 py-3 hover:bg-slate-700/30 transition-colors">
                <h4 class="font-semibold text-lg mb-2">Une définition de l'IA</h4>
                <p class="text-gray-400 text-sm mb-2">
                  L'intelligence artificielle est une constellation de technologies permettant aux machines de percevoir, 
                  comprendre, agir et apprendre à des niveaux comparables aux humains.
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <a href="https://www.cdjapan.co.jp/products?term.cat_id=UC-02">
                    <span >Source: Accenture</span>
                  </a>
                  <span>•</span>
                  <span>Février 2022</span>
                </div>
              </div>

              <div class="border-l-4 border-purple-500 pl-4 py-3 hover:bg-slate-700/30 transition-colors">
                <h4 class="font-semibold text-lg mb-2">Les algorithmes de recommandation</h4>
                <p class="text-gray-400 text-sm mb-2">
                  Comment les algorithmes comme celui de TikTok analysent nos comportements pour personnaliser notre expérience.
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span>Source: Le Parisien</span>
                  <span>•</span>
                  <span>Janvier 2022</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Thème 2 -->
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 class="text-2xl font-bold mb-6 text-pink-400">
              Thème 2 : Faut-il avoir peur de l'IA ? ⚠️
            </h3>
            <div class="space-y-4">
              <div class="border-l-4 border-pink-500 pl-4 py-3 hover:bg-slate-700/30 transition-colors">
                <h4 class="font-semibold text-lg mb-2">L'IA utilisée à des fins malveillantes</h4>
                <p class="text-gray-400 text-sm mb-2">
                  Le principal risque de l'IA reste qu'elle soit utilisée par des humains avec de mauvaises intentions.
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span>Source: Numerama</span>
                  <span>•</span>
                  <span>Janvier 2022</span>
                </div>
              </div>

              <div class="border-l-4 border-pink-500 pl-4 py-3 hover:bg-slate-700/30 transition-colors">
                <h4 class="font-semibold text-lg mb-2">L'IA peut-elle surpasser l'humain ?</h4>
                <p class="text-gray-400 text-sm mb-2">
                  La digitalisation et l'IA performante posent la question de l'avenir de l'emploi humain et des compétences à développer.
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span>Source: Les Échos</span>
                  <span>•</span>
                  <span>Février 2022</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Thème 3 -->
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 class="text-2xl font-bold mb-6 text-indigo-400">
              Thème 3 : Les bénéfices de l'IA pour tous ✨
            </h3>
            <div class="space-y-4">
              <div class="border-l-4 border-indigo-500 pl-4 py-3 hover:bg-slate-700/30 transition-colors">
                <h4 class="font-semibold text-lg mb-2">L'IA dans la cybersécurité</h4>
                <p class="text-gray-400 text-sm mb-2">
                  L'apprentissage automatique permet d'identifier rapidement les menaces réelles et de réduire les temps de réponse.
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span>Source: IBM</span>
                  <span>•</span>
                  <span>Octobre 2020</span>
                </div>
              </div>

              <div class="border-l-4 border-indigo-500 pl-4 py-3 hover:bg-slate-700/30 transition-colors">
                <h4 class="font-semibold text-lg mb-2">L'IA dans les véhicules autonomes</h4>
                <p class="text-gray-400 text-sm mb-2">
                  L'IA pour la vision et la planification est la clé pour obtenir une solution de conduite entièrement autonome.
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span>Source: Tesla</span>
                  <span>•</span>
                  <span>Mars 2021</span>
                </div>
              </div>

              <div class="border-l-4 border-indigo-500 pl-4 py-3 hover:bg-slate-700/30 transition-colors">
                <h4 class="font-semibold text-lg mb-2">L'IA dans la médecine</h4>
                <p class="text-gray-400 text-sm mb-2">
                  L'IA révolutionne la médecine avec les opérations assistées, le suivi à distance et les traitements personnalisés.
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span>Source: Inserm</span>
                  <span>•</span>
                  <span>Juillet 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Outils de veille -->
        <div class="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
          <h3 class="text-xl font-bold mb-4 text-purple-300">Mes Outils de Veille 🔍</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-slate-800/50 rounded-lg p-4 text-center">
              <div class="text-3xl mb-2">📰</div>
              <p class="font-semibold">Feedly</p>
              <p class="text-sm text-gray-400">Agrégateur RSS</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-4 text-center">
              <div class="text-3xl mb-2">🤖</div>
              <p class="font-semibold">OpenAI</p>
              <p class="text-sm text-gray-400">Actualités IA</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-4 text-center">
              <div class="text-3xl mb-2">💻</div>
              <p class="font-semibold">Hardware.fr</p>
              <p class="text-sm text-gray-400">Tech & Hardware</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-purple-500/20">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-gray-400">
          <span class="text-purple-400 font-semibold">VOTRE NOM</span>
        </p>
      </div>
    </footer>

    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);

const navItems = ['Accueil', 'À Propos', 'Parcours', 'Projets', 'Veille'];

const menuItems = [
  { name: 'Accueil', icon: '🏠', href: '#accueil' },
  { name: 'À Propos', icon: '👤', href: '#a-propos' },
  { name: 'Parcours', icon: '🎓', href: '#parcours' },
  { name: 'Projets', icon: '🚀', href: '#projets' },
  { name: 'Veille', icon: '📔', href: '#veille' },
  
];

const projects = [
  
  {
    title: "Application Web E-commerce",
    category: "Application Web",
    tech: "React, Node.js, MongoDB",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    description: "Plateforme e-commerce complète avec panier, paiement et gestion",
    href:'#accueil'
  },
  {
    title: "Site Portfolio Professionnel",
    category: "Site Internet",
    tech: "HTML, CSS, JavaScript",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    description: "Site vitrine moderne et responsive pour un client",
    href:'#parcours'
  },
  {
    title: "Application de Gestion",
    category: "Application Java",
    tech: "Java, MySQL",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    description: "Application de gestion des stocks avec base de données"
  },
  {
    title: "Dashboard Analytics",
    category: "Application Web",
    tech: "React, Chart.js",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    description: "Tableau de bord interactif avec visualisations de données"
  },
  {
    title: "Blog Personnel",
    category: "Site Internet",
    tech: "WordPress, PHP",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    description: "Blog responsive avec système de commentaires"
  },
  {
    title: "Calculatrice Scientifique",
    category: "Application C#",
    tech: "C#, .NET",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&h=300&fit=crop",
    description: "Application desktop avec fonctions avancées"
  }
];

const skills = [
  { name: "HTML", icon: "🌐", level: 50 },
  { name: "CSS", icon: "🎨", level: 50 },
  { name: "PHP", icon: "🐘", level: 50 },
  { name: "Python", icon: "🐍", level: 50 },
  { name: "SQL", icon: "🗄️", level: 50 }
];

const tools = [
  { name: "Visual Studio Code", icon: "💻" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "🎭" }
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
      @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-blob { animation: blob 7s infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-fade-in { animation: fade-in 0.8s ease-out; }
      .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }
      .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
      .animate-fade-in-delay-3 { animation: fade-in 0.8s ease-out 0.6s both; }
    </style>