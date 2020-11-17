package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class PostController {
    private PostService postService;

    // Use @Autowired annotation to inject dependency
    public PostController(@Autowired PostService postService) {
        this.postService = postService;
    }

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
    public Post create(@RequestBody Post Post) {
        return postService.create(Post);
    }

    @PutMapping("/posts")
    public Post update(@RequestBody Post updatedPost) {
        return postService.update(updatedPost);
    }

    @DeleteMapping("/posts/{id}")
    public void delete(@PathVariable Long id) {
        postService.delete(id);
    }
}
