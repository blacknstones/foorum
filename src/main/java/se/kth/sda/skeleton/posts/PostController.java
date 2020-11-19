package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.auth.AuthService;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    private PostService postService;

//    @Autowired
//    private AuthService authService;

    @GetMapping("/posts")
    public List<Post> getAll() {
            return postService.getAll();
    }

    // 200 or 404
    @GetMapping("/posts/{id}")
    public Post getById(@PathVariable Long id) {
        return postService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    // Create a new Post
    @PostMapping("/posts")
    public Post create(@RequestBody Post post) {
//        post.setUserEmail(authService.getLoggedInUserEmail());
        return postService.create(post);
    }

    @DeleteMapping("/posts/{id}")
    public void delete(@PathVariable Long id) {
        postService.delete(id);
    }
}
