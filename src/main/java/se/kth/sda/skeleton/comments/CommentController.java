package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.auth.AuthService;

import java.util.List;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

 //   @Autowired
   // private AuthService authService;


    @GetMapping("/comments/{postId}")
    public List<Comment> getAll(@PathVariable Long postId) {
        return commentService.getAllByPostId(postId);
    }


    @PostMapping("/comments")
    public Comment create(@RequestBody Comment comment) {
  //      comment.setUserEmail(authService.getLoggedInUserEmail());
        return commentService.create(comment);
    }

    @DeleteMapping("/comments/{id}")
    public void delete(@PathVariable Long id) {
        commentService.delete(id);
    }
}
