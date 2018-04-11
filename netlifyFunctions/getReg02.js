<script type="text/javascript" src="https://cdn.rawgit.com/chrisveness/crypto/master/sha1.js"></script>
exports.handler = function(event, context, callback) {
    callback(null, Sha1.hash("davlock"));
}
