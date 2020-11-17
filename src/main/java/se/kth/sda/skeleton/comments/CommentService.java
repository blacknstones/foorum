package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepo repo;

    public List<Comment> getAll() {
        return repo.findAll();
    }

    public List<Comment> getAllByPostId(Long postId) {
        return repo.findAllByPostId(postId);
    }

    public Comment create(Comment comment) {
        return repo.save(comment);
    }

    public Comment update(Comment updatedComment) {
        return repo.save(updatedComment);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
