<template>
    <div class="main-nav">
        <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">netcore</a>
            </div>
            <div class="clearfix"></div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/" :exact="true">
                            <span class="glyphicon glyphicon-home"></span> Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/counter">
                            <span class="glyphicon glyphicon-education"></span> Counter
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/fetchdata">
                            <span class="glyphicon glyphicon-th-list"></span> Fetch data
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/app2">
                            <span class="glyphicon glyphicon-th-list"></span> app2
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/app3">
                            <span class="glyphicon glyphicon-th-list"></span> app3
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/app4">
                            <span class="glyphicon glyphicon-th-list"></span> app4
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/slots">
                            <span class="glyphicon glyphicon-th-list"></span>Slots
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/example5">
                            <span class="glyphicon glyphicon-th-list"></span>Example 5
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Vuex">
                            <span class="glyphicon glyphicon-th-list"></span>Vuex Example 
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/pageauth">
                            <span class="glyphicon glyphicon-th-list"></span>Login Mixin
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/route-meta">
                            <span class="glyphicon glyphicon-th-list"></span>Route meta field
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style src="./navmenu.css" />
