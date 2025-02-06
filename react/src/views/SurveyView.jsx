import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";
import axiosClient from "../axios";

export default function SurveyView() {
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: false,
    description: "",
    image: null,
    image_url: null,
    expire_date: "",
    question: [],
  });

  const onImageChoose = () => {
    console.log("On image choose");
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    axiosClient.post("/survey", {
      title: "lorem ipsum",
      description: "test",
      expire_date: "2025-11-24",
      status: true,
      questions: [],
    });
  };
  return (
    <PageComponent title="Create new survey">
      <form action="#" method="post" onSubmit={onSubmit}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 space-y-8 bg-white">
            {/* image */}
            <div>
              <label className="block font-medium text-gray-700 test-sm">
                Photo
              </label>
              <div className="flex items-center mt-1">
                {survey.image_url && (
                  <img
                    src={survey.image_url}
                    alt=""
                    className="object-cover w-32 h-32"
                  />
                )}
                {!survey.image_url && (
                  <span className="flex items-center justify-center w-12 h-12 overflow-hidden text-gray-400 bg-gray-100 rounded-full">
                    <PhotoIcon className="w-8 h-8" />
                  </span>
                )}
                <button
                  type="button"
                  className="relative px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <input
                    type="file"
                    className="absolute top-0 bottom-0 left-0 right-0 opacity-0"
                    onChange={onImageChoose}
                  />
                  Change
                </button>
              </div>
            </div>
            {/* image */}

            {/* title */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Survey Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={survey.title}
                autoComplete="given-name"
                className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
                onChange={(ev) =>
                  setSurvey({ ...survey, title: ev.target.value })
                }
              />
            </div>
            {/* title */}

            {/* Description */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe your survey"
                type="text"
                value={survey.description}
                autoComplete="given-name"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(ev) =>
                  setSurvey({ ...survey, description: ev.target.value })
                }
              ></textarea>
            </div>
            {/* Description */}

            {/* expire date */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="expire_data"
                id="expire_data"
                value={survey.expire_date}
                onChange={(ev) => {
                  setSurvey({ ...survey, expire_date: ev.target.value });
                }}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {/* expire date */}

            {/* Active */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="status"
                  name="status"
                  type="checkbox"
                  checked={survey.status}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  onChange={(ev) =>
                    setSurvey({ ...survey, status: ev.target.checked })
                  }
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700">
                  Active
                </label>
                <p className="text-gray-500">
                  Whether to make survey publicly available
                </p>
              </div>
            </div>
            {/* Active */}
          </div>

          <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <TButton>Save</TButton>
          </div>
        </div>
      </form>
    </PageComponent>
  );
}
