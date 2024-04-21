<script lang="ts">
    import SettingsPage from "../views/settings-page.svelte";
    import Header from "../molecules/header.svelte";
    import Sidebar from "../molecules/sidebar.svelte";
    import PostsPage from "../views/posts-page.svelte";
    import FileList from "../views/files-page.svelte";
    import CalendarPage from "../views/calendar-page.svelte";
    import Test from "../views/test.svelte";
    import { onMount } from "svelte";
    import DashPage from "../views/dash-page.svelte";
    import { Toaster } from "svelte-sonner";
    import { Route, Router } from "svelte-routing";
    import AddPost from "../views/add-post.svelte";
    onMount(() => {
        console.log("page mounted");
    });
</script>

<div
    class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
>
    <Sidebar />

    <div class="flex flex-col">
        <Header />
        <Toaster />
        <Router url="">
            <Route path="/">
                <DashPage />
            </Route>
            <Route path="posts">
                <PostsPage />
            </Route>

            <Route path="posts/:id" let:params>
                <AddPost id={params.id} />
            </Route>
            <Route path="files" component={FileList} />
            <Route path="settings" component={SettingsPage} />
            <Route path="calendar" component={CalendarPage} />
            <Route path="test" component={Test} />
        </Router>
    </div>
</div>
