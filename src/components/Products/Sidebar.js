const Sidebar = ({ mens, womens, setMens, setWomens }) => {
  return (
    <aside className='col-lg-3 '>
      <button
        className='btn btn-outline-secondary mb-3 w-100  d-lg-none'
        data-bs-toggle='collapse'
        data-bs-target='#aside_filter'>
        Show filter
      </button>

      <div id='aside_filter' className='collapse card d-lg-block mb-5'>
        <article className='filter-group'>
          <header className='card-header'>
            <span
              className='title'
              data-bs-toggle='collapse'
              data-bs-target='#collapse_aside_brands'>
              <i className='icon-control fa fa-chevron-down'></i> Categories
            </span>
          </header>
          <div className='collapse show' id='collapse_aside_brands'>
            <div className='card-body'>
              <label className='form-check mb-2'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value={mens}
                  onChange={() => setMens((current) => !current)}
                />
                <span className='form-check-label'> Men Clothings </span>
              </label>
              <label className='form-check mb-2'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value={womens}
                  onChange={() => setWomens((current) => !current)}
                />
                <span className='form-check-label'> Womens Clothings </span>
              </label>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
};

export default Sidebar;
