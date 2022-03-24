
const ListPost = () => {

  const fetchPosts = () => {
    try {

    } catch (error) {

    }
  }

  return (
    <section className="administrative">
      <div className="administrative__wrapper">
        <div className="administrative__header">
          <div className="administrative__header__label">Posts</div>
          <h1 className="administrative__header__title">Les posts crées par la communauté</h1>
        </div>
        <div className="administrative__posts">
          <div className="administrative__cards">
            {/*{helpItems.map(helpItem => (*/}
            {/*  <Block key={helpItem} {...helpItem}/>*/}
            {/*))}*/}
          </div>
          <div className="post">
            <div className="post__inner">
              <h3 className="post__title">Voir tous les posts</h3>
              <button className="post__btn">
                <span>Voir plus</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPost;
