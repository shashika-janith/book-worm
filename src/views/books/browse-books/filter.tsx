
interface IFilter {

}

const Filter = ({  }: IFilter) => {

  return (
    <div className="books-filter">
        <div className="flex justify-between items-center header">
            <p className="section-title-2">Filter</p>
            <button className="btn btn-outline btn-primary btn-xs">Clear</button> 
        </div>

        <div className="overflow-y-auto">
            <div className="form-control">
                    <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span> 
                    <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
            </div>

            <div className="form-control">
                    <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span> 
                    <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
            </div>

            <div className="form-control">
                    <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span> 
                    <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
            </div>

            <div className="form-control">
                    <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span> 
                    <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
            </div>

            <div className="form-control">
                    <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span> 
                    <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
            </div>
        </div>
    </div>
  );

}

export default Filter;